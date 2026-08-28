export const dynamic='force-dynamic';

// Installers are not public yet. This platform-neutral response keeps the
// portfolio deployable on both Vercel and Cloudflare until release storage is
// connected to a shared provider.
export async function GET(){return Response.json([])}

export async function POST(){
  return Response.json(
    {error:'Release publishing is not enabled on this deployment.'},
    {status:503},
  );
}
