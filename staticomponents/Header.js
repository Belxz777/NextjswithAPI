import Link from "next/link";
import '../src/app/css/Static.css'
const Shapka = ()=>{
    return(
        <header className="flex justify-start ">
            <Link href='/test' className="flex-none w-14 h-14  text-sky-400"  >Страница определенния какой ты котик</Link>
            <Link href='/iplocation' className="flex-none w-14 h-14 ">Страница 3д наверно</Link>
        </header>
    )
}
export {Shapka}