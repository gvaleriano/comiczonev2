export function HomePage() {
  return (
    <div className="flex items-center justify-center p-24">
      <section className=" flex flex-col w-[70%] p-6 h-full text-white">
        <span className="text-2xl font-semibold"> 👏 Hey, Welcome</span>
        <h1 className="text-7xl font-bold py-5">Dive into <span className="text-cyan-300">comics adventure</span>.</h1>
        <p className="text-2xl py-6 font-normal">
          Get access to all the content <br />
          <span className="text-cyan-300">for 15,99 month</span>
        </p>
        <button className="h-16 w-64 rounded-full font-bold text-2xl flex items-center justify-center bg-amber-500 text-black hover:bg-amber-400">Subscribe Now</button>
      </section>
      <div className="flex-1 h-auto">
        <img className="w-[450px] h-[450px]" src="/images/hero.svg" alt="" />
      </div>
    </div>
  )
}