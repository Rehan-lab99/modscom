'use client';
import { useState } from 'react';

export default function ImageAI(){
  const [prompt,setPrompt]=useState("");
  const [image,setImage]=useState(null);

  const generate=async()=>{
    const r = await fetch('/api/image',{method:'POST',body:JSON.stringify({prompt})});
    const d = await r.json();
    setImage("data:image/png;base64,"+d.image);
  };

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-4'>AI Image Generator</h1>
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)}
        className='w-full p-3 bg-gray-700 rounded-xl' placeholder='Describe your image...'></textarea>
      <button onClick={generate} className='w-full bg-purple-600 py-3 mt-3 rounded-xl'>Generate</button>
      {image && <img src={image} className='mt-5 rounded-xl'/>}
    </div>
  );
}