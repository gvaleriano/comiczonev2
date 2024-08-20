import {ReactNode} from "react"

interface ChildrenProps {
  children: ReactNode;
  className: string;
}

export function Layout({children, className}:ChildrenProps){
  return(
    <main className={`w-full bg-gray-950 ${className}`}>
      {children}
    </main>
  )
}