import { LockKeyhole, User, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  function openLoginModal() {
    setIsLoginModalOpen(true);
  }

  function closeLoginModal() {
    setIsLoginModalOpen(false);
  }
  return (
    <>
      <header className="w-full px-32 py-6 font-medium flex items-center justify-between
      dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
    ">
        {/*
      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>*/}
        <div className="w-full flex justify-between items-center">
          <nav className="px-14 flex justify-between">
            <a href="/" title="Home" className="mr-4 text-white">Home</a>
            <a href="/about" title="Home" className="mr-4 text-white">Sobre</a>
            <a href="/comics" title="Home" className="mr-4 text-white">Comics</a>
          </nav>
          <button className="bg-gray-800 h-12 rounded-3xl flex items-center justify-center px-6 font-bold text-white
             hover:bg-amber-500 hover:text-black" onClick={openLoginModal}>
            <LockKeyhole className="mr-3 h-5" /> Login With Email
          </button>
        </div>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <img className="w-24 h-24" src="/images/logo_comic.svg" alt="ComicZone Logo" />
        </div>
      </header>
      <div className="w-full h-[1px] bg-slate-400" />

      {/* Modal login */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-full flex items-center justify-center">
                  <h2 className="text-lg font-semibold text-zinc-300">Login</h2>
                </div>
                <button type="button" onClick={closeLoginModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-sm text-zinc-400">
                  Digite os seus dados de acesso para continuar.
                </p>
              </div>

            </div>

            <div className="w-full h-px bg-zinc-800" />
            <form className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-col">
              <div className="px-2 py-2 flex items-center w-full">
                <User className="text-zinc-400 size-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail"
                  className=" px-2 bg-transparent text-lg placeholder-zinc-400 outline-none w-full  text-zinc-300 "
                />
              </div>
              <div className="px-2 py-2 flex items-center w-full">
                <LockKeyhole className="text-zinc-400 size-5" />
                <input
                  type="password"
                  name="password"
                  placeholder="Digite a senha"
                  className=" px-2 bg-transparent text-lg placeholder-zinc-400 outline-none w-full text-zinc-300 "
                />
              </div>
              <button className="text-black font-semibold w-full rounded-sm h-8 bg-amber-500 hover:bg-amber-400">
                Login
              </button>
            </form>


          </div>
        </div>
      )}
    </>
  )
}