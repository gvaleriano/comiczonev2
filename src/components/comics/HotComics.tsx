import { Star } from "lucide-react";

export function HotComics() {
  return (
    <div className="flex w-full h-[400px] flex-col items-center py-2">
      <span className="text-2xl font-semibold text-zinc-300">Hot Comics</span>
      <div className="w-full flex flex-row flex-wrap justify-around items-center py-6">
        <div className="w-40 h-44 relative">
          <span className="bg-slate-700/90 rounded-full p-[3px] absolute text-white flex mt-1 text-sm justify-center items-center w-14 ml-2"><Star className="size-5 p-1 mr-0.5" fill="#f59e0b" />5.0</span>
          <img className="rounded-2xl" src="/banners/banner1.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Angel - (2024)</span>
            <span className="text-zinc-400 w-full text-center">Marvel Comics</span>
          </div>
        </div>
        <div className="w-40 h-44 relative">
          <span className="bg-slate-700/90 rounded-full p-[3px] absolute text-white flex mt-1 text-sm justify-center items-center w-14 ml-2"><Star className="size-5 p-1 mr-0.5" fill="#f59e0b" />5.0</span>
          <img className="rounded-2xl" src="/banners/banner2.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">The Sin of Green Lantern - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
        <div className="w-40 h-44 relative">
          <span className="bg-slate-700/90 rounded-full p-[3px] absolute text-white flex mt-1 text-sm justify-center items-center w-14 ml-2"><Star className="size-5 p-1 mr-0.5" fill="#f59e0b" />5.0</span>
          <img className="rounded-2xl" src="/banners/banner3.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Flash Ignition Point - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
        <div className="w-40 h-44 relative">
          <span className="bg-slate-700/90 rounded-full p-[3px] absolute text-white flex mt-1 text-sm justify-center items-center w-14 ml-2"><Star className="size-5 p-1 mr-0.5" fill="#f59e0b" />5.0</span>
          <img className="rounded-2xl" src="/banners/banner1.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Angel - (2024)</span>
            <span className="text-zinc-400 w-full text-center">Marvel Comics</span>
          </div>
        </div>
        <div className="w-40 h-44 relative">
          <span className="bg-slate-700/90 rounded-full p-[3px] absolute text-white flex mt-1 text-sm justify-center items-center w-14 ml-2"><Star className="size-5 p-1 mr-0.5" fill="#f59e0b" />5.0</span>
          <img className="rounded-2xl" src="/banners/banner2.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">The Sin of Green Lantern - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
        <div className="w-40 h-44 relative">
          <span className="bg-slate-700/90 rounded-full p-[3px] absolute text-white flex mt-1 text-sm justify-center items-center w-14 ml-2"><Star className="size-5 p-1 mr-0.5" fill="#f59e0b" />5.0</span>
          <img className="rounded-2xl" src="/banners/banner3.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Flash Ignition Point - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
      </div>
    </div>
  )
}