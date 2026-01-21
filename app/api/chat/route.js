export const runtime = "nodejs";

export async function POST(req){
  const { mensaje } = await req.json();

  if(!mensaje) return Response.json({ response:"Please type something." });

  const text = mensaje.toLowerCase();

  if(text.includes("creator")||text.includes("kisne")||text.includes("kiska")){
    return Response.json({ response: "I am MODSCOM BOT — created by MODSCOM." });
  }

  const r = await fetch(`https://rajan-notegpt-ai.vercel.app/api/chat?mensaje=${encodeURIComponent(mensaje)}`);
  const data = await r.json();

  return Response.json({ response: data.response });
}