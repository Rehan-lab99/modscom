export const runtime = "nodejs";

export async function POST(req){
  const { prompt } = await req.json();

  const r = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",{
    method:"POST",
    headers:{ Authorization:`Bearer YOUR_HF_API_KEY` },
    body: JSON.stringify({ inputs: prompt })
  });

  const arr = await r.arrayBuffer();
  const b64 = Buffer.from(arr).toString("base64");

  return Response.json({ image: b64 });
}