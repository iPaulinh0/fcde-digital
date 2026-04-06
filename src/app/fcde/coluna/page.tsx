import Image from "next/image";

export default function Coluna() {
    return (
    <div>
        <div className="grid grid-cols-5">
            <h2 className="text-center font-semibold text-lg">Item de Inspeção</h2>
            <h2 className="text-center font-semibold text-lg">Especificação</h2>
            <h2 className="text-center font-semibold text-lg">Método de Inspeção</h2>
            <h2 className="text-center font-semibold text-lg">Status</h2>
            <h2 className="text-center font-semibold text-lg">Imagem</h2>
        </div>
        <div className="flex flex-col justify-center bg-zinc-50 rounded-lg shadow-2xl h-[800px] p-10 overflow-y-scroll">
            <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center">
                <span className="text-center font-semibold">Conjunto Parafusadeira Eletrônica</span>
                <span className="text-start">Isento de ruídos, vibrações, folgas, desgastes, parafusos e cabos soltos</span>
                <span className="text-center">Visual</span>
                <span className="text-center">Form</span>
                <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
            </div>
                <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                <span className="text-center font-semibold">Faixa de Torque</span>
                <span className="text-start">Deverá informar torque aplicado: K2G: 20-30 Kgf/cm</span>
                <span className="text-center">Visual/Manual</span>
                <input type="number" className="text-center bg-zinc-100 rounded-md ring-1 ring-red-500 p-2 w-fit mx-auto focus:outline-2 focus:outline-red-500" placeholder="Informe a média" max={2}/>
            </div>
            <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                <span className="text-center font-semibold">Faixa de Torque</span>
                <span className="text-start">Deverá informar torque aplicado: K1S: 20-30 Kgf/cm</span>
                <span className="text-center">Visual/Manual</span>
                <input type="number" className="text-center bg-zinc-100 rounded-md ring-1 ring-red-500 p-2 w-fit mx-auto focus:outline-2 focus:outline-red-500" placeholder="Informe a média" max={2}/>
            </div>
            <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                <span className="text-center font-semibold">Faixa de Torque</span>
                <span className="text-start">Deverá informar torque aplicado: K99: 30-40 Kgf/cm</span>
                <span className="text-center">Visual/Manual</span>
                <input type="number" className="text-center bg-zinc-100 rounded-md ring-1 ring-red-500 p-2 w-fit mx-auto focus:outline-2 focus:outline-red-500" placeholder="Informe a média" max={2}/>
            </div>
            <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                <span className="text-center font-semibold">Gatilho de Acionamento</span>
                <span className="text-start">
                    Deverá acionar a parafusadeira quando apertado.
                </span>
                <span className="text-center">Visual/Manual</span>
                <span>Form</span>
                <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
            </div>
            <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                <span className="text-center font-semibold">Pino de seleção de sentido de rotação. <br /> Chave Soquete</span>
                <span className="text-start">
                    Deverá girar livremente conforme sentido acionado [anti-horário | horário]. Isento de folgas / desgastes
                </span>
                <span className="text-center">Visual/Manual</span>
                <span>Form</span>
                <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
            </div>
            <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                <span className="text-center font-semibold">Braço de reação</span>
                <span className="text-start">
                    Isento de folgas ou desgastes; Presença dos parafusos/porca de fixar braço com a ferramenta e cabo de segurança.
                </span>
                <span className="text-center">Visual/Manual</span>
                <span>Form</span>
                <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
            </div>
            <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                <span className="text-center font-semibold">Balancim</span>
                <span className="text-start">
                   Deverá existir: cabo de segurança fixo com braçadeira. Não deve haver folga, solto, quebrado ou ausente.
                </span>
                <span className="text-center">Visual</span>
                <span>Form</span>
                <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
            </div>
            <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                <span className="text-center font-semibold">Selo de calibração</span>
                <span className="text-start">
                    Deve existir o selo de calibração da Atlas Copco na Ferramenta com a <strong>DATA DA CALIBRAÇÃO, DATA DE VALIDADE</strong> e <strong>Nº DO CERTIFICADO</strong>
                </span>
                <span className="text-center">Visual/Manual</span>
                <span>Form</span>
                <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
            </div>
        </div>
    </div>
      
      
    );
  }