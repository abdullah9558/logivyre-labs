import {env} from 'cloudflare:workers';

const table=`CREATE TABLE IF NOT EXISTS releases (
  id TEXT PRIMARY KEY,
  product TEXT NOT NULL,
  version TEXT NOT NULL,
  filename TEXT NOT NULL,
  object_key TEXT NOT NULL,
  content_type TEXT NOT NULL,
  size INTEGER NOT NULL,
  created_at TEXT NOT NULL
)`;

async function ready(){await env.DB.prepare(table).run()}

export async function GET(){await ready();const result=await env.DB.prepare('SELECT id, product, version, filename, size, created_at AS createdAt FROM releases ORDER BY created_at DESC').all();return Response.json(result.results)}

export async function POST(request:Request){
  const expected=(env as unknown as {RELEASE_ADMIN_KEY?:string}).RELEASE_ADMIN_KEY;
  if(!expected||request.headers.get('x-admin-key')!==expected)return Response.json({error:'Unauthorized'},{status:401});
  const form=await request.formData();const file=form.get('file');const product=String(form.get('product')||'').trim();const version=String(form.get('version')||'').trim();
  if(!(file instanceof File)||!product||!version)return Response.json({error:'Product, version and installer are required.'},{status:400});
  if(!/\.(exe|msi)$/i.test(file.name))return Response.json({error:'Only Windows .exe and .msi installers are accepted.'},{status:400});
  const id=crypto.randomUUID();const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,'-');const key=`releases/${id}/${safe}`;const bucket=(env as unknown as {FILES:R2Bucket}).FILES;
  await bucket.put(key,file.stream(),{httpMetadata:{contentType:file.type||'application/octet-stream'},customMetadata:{product,version}});
  await ready();await env.DB.prepare('INSERT INTO releases (id,product,version,filename,object_key,content_type,size,created_at) VALUES (?,?,?,?,?,?,?,?)').bind(id,product,version,file.name,key,file.type||'application/octet-stream',file.size,new Date().toISOString()).run();
  return Response.json({id,product,version,filename:file.name,size:file.size},{status:201});
}
