import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-svh justify-center bg-zinc-200 font-sans">
      <div className="mb-10 flex flex-col items-center justify-center">
        <Image src="/honda.png" alt="Logo" width={100} height={100} className="mb-2" />
        <h1 className="text-zinc-700 text-2xl font-bold tracking-wide">FCDE Digital</h1>
      </div>
     <div className="flex flex-col items-center justify-center bg-zinc-100 rounded-lg px-4 py-10 shadow-md">
      <span className="text-zinc-700 text-sm font-medium tracking-wide justify-start w-full mb-1">Matrícula do Colaborador</span>
      <form className="flex flex-col items-center justify-center">
        <input type="number" placeholder="Digite sua matrícula" className="outline-1 outline-red-600 rounded-md w-72 font-medium text-start text-zinc-500 text-sm p-2 bg-transparent focus:outline-2"/>
        <Link href='/fcde' className="bg-red-700 text-zinc-100 rounded-md p-1 w-full font-medium text-center text-base mt-2 hover:bg-red-800 cursor-pointer transition-all duration-100">Entrar</Link>
        <button className="text-sm mt-3 bg-none text-zinc-700 hover:text-red-700 hover:underline cursor-pointer">Login como administrador</button>
      </form>
     </div>
    </div>
  );
}
