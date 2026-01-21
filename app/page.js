import { motion } from "framer-motion";

export default function Home(){
  return (
    <div className="flex flex-col items-center text-center mt-24 px-5">
      <motion.h1 className="text-5xl font-extrabold mb-6"
        initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}>
        Welcome to MODSCOM BOT
      </motion.h1>
      <p className="max-w-2xl text-gray-300 text-lg mb-10">
        AI chatbot + image generation by <span className='text-blue-400 font-bold'>MODSCOM</span>
      </p>
      <div className="flex gap-6">
        <a href="/chat" className="bg-blue-600 px-6 py-3 rounded-xl">Chat</a>
        <a href="/image-ai" className="bg-purple-600 px-6 py-3 rounded-xl">Image AI</a>
      </div>
    </div>
  );
}