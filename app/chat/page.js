'use client';
import { useState } from 'react';

export default function Chat(){
  const [messages,setMessages]=useState([]);
  const [input,setInput]=useState("");

  const sendMessage=async()=>{
    if(!input) return;

    const res = await fetch('/api/chat',{method:'POST', body: JSON.stringify({ mensaje: input })});
    const data = await res.json();

    setMessages([...messages,{user:true,text:input},{user:false,text:data.response}]);
    setInput("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Chat with MODSCOM BOT</h1>

      <div className="bg-gray-800 p-4 rounded-xl h-[450px] overflow-y-auto mb-4">
        {messages.map((m,i)=>(
          <div key={i} className={`p-3 m-2 rounded-xl w-fit ${m.user?'bg-blue-600 ml-auto':'bg-gray-700'}`}>
            {m.text}
          </div>
        ))}
      </div>

      <input value={input} onChange={e=>setInput(e.target.value)}
        className="w-full p-3 bg-gray-700 rounded-xl" placeholder="Ask something..."/>

      <button onClick={sendMessage} className="w-full bg-blue-600 py-3 rounded-xl mt-3">
        Send
      </button>
    </div>
  );
}