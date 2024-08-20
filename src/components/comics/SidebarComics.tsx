export function SideBarComics() {
  return (
    <div className="w-[30%] h-full flex flex-col items-center py-6">
      <span className="text-amber-500 font-semibold p-2">Top Rated Comics</span>
      <div className="w-full h-full rounded-lg flex py-12 ml-4 flex-col">
        <div className="h-[130px] flex bg-gray-900 p-2 rounded-xl my-1">
          <div className="h-full px-4">
            <img className="rounded-2xl h-full" src="/banners/banner2.jpg" alt="" />
          </div>
          <div className="flex items-center justify-start">
            <span className="text-white">The Sin of Green Lantern - (2024)</span>
          </div>
        </div>

        <div className="h-[130px] flex bg-gray-900 p-2 rounded-xl my-1">
          <div className="h-full px-4">
            <img className="rounded-2xl h-full" src="/banners/banner2.jpg" alt="" />
          </div>
          <div className="flex items-center justify-start">
            <span className="text-white">The Sin of Green Lantern - (2024)</span>
          </div>
        </div>

        <div className="h-[130px] flex bg-gray-900 p-2 rounded-xl my-1">
          <div className="h-full px-4">
            <img className="rounded-2xl h-full" src="/banners/banner2.jpg" alt="" />
          </div>
          <div className="flex items-center justify-start">
            <span className="text-white">The Sin of Green Lantern - (2024)</span>
          </div>
        </div>
        <button className="bg-amber-500 h-12 rounded-3xl flex items-center justify-center mt-6 font-bold text-black
     hover:bg-amber-400">
          Load More
        </button>
      </div>
    </div>
  )
}