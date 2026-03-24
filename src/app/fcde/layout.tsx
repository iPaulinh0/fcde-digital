export default function FCDELayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-zinc-200 px-10 grid grid-rows-1 h-svh py-4">
      {children}
      <div className="flex flex-row items-center justify-between font-medium">
        <span>Período de Retenção: 20 anos após desativação do equipamento ou 25 anos após invalidação do documento.</span>
        <span>LM 14010 R01-04</span>
      </div>
    </div>
  );
}