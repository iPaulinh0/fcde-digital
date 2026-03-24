import Image from "next/image";

export default function Coluna() {
    return (
      <div className="overflow-x-auto">
        <table className="table">
            <thead>
                <tr className="text-wrap">
                    <th className="text-center font-semibold text-lg">Item de Inspeção</th>
                    <th className="text-center font-semibold text-lg">Especificação</th>
                    <th className="text-center font-semibold text-lg">Método de Inspeção</th>
                    <th className="text-center font-semibold text-lg"></th>
                    <th className="text-center font-semibold text-lg">Imagem</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Conjunto Parafusadeira Eletrônica</td>
                    <td>Isento de ruídos, vibrações, folgas, desgastes, parafusos e cabos soltos</td>
                    <td>Visual</td>
                    <td>Form</td>
                    <td><Image src='/item1.png' alt="item de inspeção 1" width={200} height={200}/></td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }