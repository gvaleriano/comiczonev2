import { SideBarComics } from "./SidebarComics"

export function LatestAndTopRatedSection (){
  return(
    <div className="flex justify-center w-full">
      <SideBarComics/>
    <div className="flex-1 ml-2">
      <div className="flex ml-2 py-8">
        <span className="text-zinc-300 font-semibold "> Latest News</span>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-around items-center py-6">
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner1.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Angel - (2024)</span>
            <span className="text-zinc-400 w-full text-center">Marvel Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner2.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">The Sin of Green Lantern - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner3.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Flash Ignition Point - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner1.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Angel - (2024)</span>
            <span className="text-zinc-400 w-full text-center">Marvel Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner2.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">The Sin of Green Lantern - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner3.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Flash Ignition Point - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full flex flex-row flex-wrap justify-around items-center pt-24">
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner1.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Angel - (2024)</span>
            <span className="text-zinc-400 w-full text-center">Marvel Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner2.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">The Sin of Green Lantern - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner3.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Flash Ignition Point - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner1.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Angel - (2024)</span>
            <span className="text-zinc-400 w-full text-center">Marvel Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner2.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">The Sin of Green Lantern - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
        <div className="w-32 h-32 p-2">
          <img className="rounded-2xl" src="/banners/banner3.jpg" alt="" />
          <div className="w-full flex items-center justify-center flex-col">
            <span className="text-white p-2 truncate w-full text-center">Flash Ignition Point - (2024)</span>
            <span className="text-zinc-400 w-full text-center">DC Comics</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}