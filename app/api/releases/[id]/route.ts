export const dynamic='force-dynamic';

export async function GET(){
  return new Response('Release not found',{status:404});
}
