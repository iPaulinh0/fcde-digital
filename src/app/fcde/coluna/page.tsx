import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CircleCheck, CircleSlash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Coluna() {
    return (
        <div className="h-full min-h-0 flex flex-col gap-2 overflow-hidden bg-zinc-50 rounded-lg shadow-xl">
            <div className="grid grid-cols-5 pt-2 shrink-0">
                <h2 className="text-center font-semibold text-lg">Item de Inspeção</h2>
                <h2 className="text-center font-semibold text-lg">Especificação</h2>
                <h2 className="text-center font-semibold text-lg">Método de Inspeção</h2>
                <h2 className="text-center font-semibold text-lg">Status</h2>
                <h2 className="text-center font-semibold text-lg">Imagem</h2>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto rounded-lg bg-zinc-50 shadow-xl p-10">
                <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center">
                    <span className="font-semibold">Conjunto Parafusadeira Eletrônica</span>
                    <span className="text-start">Isento de ruídos, vibrações, folgas, desgastes, parafusos e cabos soltos</span>
                    <span className="text-center">Visual</span>
                    <ToggleGroup type="single" className="mx-auto" size={"lg"} variant={"outline"} spacing={4}>
                        <ToggleGroupItem value="OK" size={"lg"}><CircleCheck className="text-emerald-500 size-6"/></ToggleGroupItem>
                        <ToggleGroupItem value="NG"><CircleSlash className="text-red-500 size-6"/></ToggleGroupItem>
                    </ToggleGroup>
                    <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
                </div>
                    <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                    <span className="font-semibold">Faixa de Torque</span>
                    <span className="text-start">Deverá informar torque aplicado: K2G: 20-30 Kgf/cm</span>
                    <span className="text-center">Visual/Manual</span>
                    <input type="number" className="text-center bg-zinc-100 rounded-md ring-1 ring-red-500 p-2 w-fit mx-auto focus:outline-2 focus:outline-red-500" placeholder="Informe a média" max={2}/>
                </div>
                <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                    <span className="font-semibold">Faixa de Torque</span>
                    <span className="text-start">Deverá informar torque aplicado: K1S: 20-30 Kgf/cm</span>
                    <span className="text-center">Visual/Manual</span>
                    <input type="number" className="text-center bg-zinc-100 rounded-md ring-1 ring-red-500 p-2 w-fit mx-auto focus:outline-2 focus:outline-red-500" placeholder="Informe a média" max={2}/>
                </div>
                <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                    <span className="font-semibold">Faixa de Torque</span>
                    <span className="text-start">Deverá informar torque aplicado: K99: 30-40 Kgf/cm</span>
                    <span className="text-center">Visual/Manual</span>
                    <input type="number" className="text-center bg-zinc-100 rounded-md ring-1 ring-red-500 p-2 w-fit mx-auto focus:outline-2 focus:outline-red-500" placeholder="Informe a média" max={2}/>
                </div>
                <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                    <span className="font-semibold">Gatilho de Acionamento</span>
                    <span className="text-start">
                        Deverá acionar a parafusadeira quando apertado.
                    </span>
                    <span className="text-center">Visual/Manual</span>
                    <ToggleGroup type="single" className="mx-auto" size={"lg"} variant={"outline"} spacing={4}>
                        <ToggleGroupItem value="OK"><CircleCheck className="text-emerald-500 size-6"/></ToggleGroupItem>
                        <ToggleGroupItem value="NG"><CircleSlash className="text-red-500 size-6"/></ToggleGroupItem>
                    </ToggleGroup>
                    <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
                </div>
                <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                    <span className="font-semibold">Pino de seleção de sentido de rotação. <br /> Chave Soquete</span>
                    <span className="text-start">
                        Deverá girar livremente conforme sentido acionado [anti-horário | horário]. Isento de folgas / desgastes
                    </span>
                    <span className="text-center">Visual/Manual</span>
                    <ToggleGroup type="single" className="mx-auto" size={"lg"} variant={"outline"} spacing={4}>
                        <ToggleGroupItem value="OK" size={"lg"}><CircleCheck className="text-emerald-500 size-6"/></ToggleGroupItem>
                        <ToggleGroupItem value="NG"><CircleSlash className="text-red-500 size-6"/></ToggleGroupItem>
                    </ToggleGroup>
                    <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
                </div>
                <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                    <span className="font-semibold">Braço de reação</span>
                    <span className="text-start">
                        Isento de folgas ou desgastes; Presença dos parafusos/porca de fixar braço com a ferramenta e cabo de segurança.
                    </span>
                    <span className="text-center">Visual/Manual</span>
                    <ToggleGroup type="single" className="mx-auto" size={"lg"} variant={"outline"} spacing={4}>
                        <ToggleGroupItem value="OK" size={"lg"}><CircleCheck className="text-emerald-500 size-6"/></ToggleGroupItem>
                        <ToggleGroupItem value="NG"><CircleSlash className="text-red-500 size-6"/></ToggleGroupItem>
                    </ToggleGroup>
                    <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
                </div>
                <div className="grid grid-cols-5 border-b-2 border-zinc-300 gap-2 items-center py-6">
                    <span className="font-semibold">Balancim</span>
                    <span className="text-start">
                        Deverá existir: cabo de segurança fixo com braçadeira. Não deve haver folga, solto, quebrado ou ausente.
                    </span>
                    <span className="text-center">Visual</span>
                    <ToggleGroup type="single" className="mx-auto" size={"lg"} variant={"outline"} spacing={4}>
                        <ToggleGroupItem value="OK" size={"lg"}><CircleCheck className="text-emerald-500 size-6"/></ToggleGroupItem>
                        <ToggleGroupItem value="NG"><CircleSlash className="text-red-500 size-6"/></ToggleGroupItem>
                    </ToggleGroup>
                    <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
                </div>
                <div className="grid grid-cols-5 border-zinc-300 gap-2 items-center py-6">
                    <span className="font-semibold">Selo de calibração</span>
                    <span className="text-start">
                        Deve existir o selo de calibração da Atlas Copco na Ferramenta com a <strong>DATA DA CALIBRAÇÃO, DATA DE VALIDADE</strong> e <strong>Nº DO CERTIFICADO</strong>
                    </span>
                    <span className="text-center">Visual/Manual</span>
                    <ToggleGroup type="single" className="mx-auto" size={"lg"} variant={"outline"} spacing={4}>
                        <ToggleGroupItem value="OK" size={"lg"}><CircleCheck className="text-emerald-500 size-6"/></ToggleGroupItem>
                        <ToggleGroupItem value="NG"><CircleSlash className="text-red-500 size-6"/></ToggleGroupItem>
                    </ToggleGroup>
                    <span className="mb-2"><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></span>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full" variant={"default"}>Enviar</Button>
                    </DialogTrigger>
                    <DialogContent className="md:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Tem certeza que deseja enviar o documento?</DialogTitle>
                            <DialogDescription>
                                Ao ser enviado, o documento não pode ser alterado. Todas as informações contidas nele devem
                                ser verdadeiras!
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose>
                                <Button variant={"destructive"}>Cancelar</Button>
                            </DialogClose>
                            <Link href={"/fcde"}><Button variant={"default"}>Enviar</Button></Link>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
      
      
    );
  }