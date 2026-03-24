import Link from "next/link";

export default function FCDE() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-200 font-sans">
      <div className="flex flex-col items-center justify-center bg-zinc-100 rounded-lg px-4 py-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Checagem Diária de Equipamento</h1>
        <div className="flex flex-col gap-1 items-start mb-3">
            <h1 className="text-lg font-bold">Parafusadeira Eletrônica - Aperto e Torque da Coluna de Direção (Bate-Bate)</h1>
            <span>N° do Equipamento: D041273</span>
            <span>Setor: Linha de Montagem II</span>
            <span>Centro de Custo: 50011102</span>
        </div>
        <Link href='/fcde/coluna' className="bg-red-500 text-center p-2 w-full rounded-md font-semibold text-zinc-200 cursor-pointer hover:bg-red-800 transition-all">Preencher</Link>              
      </div>
    </div>
  );
}