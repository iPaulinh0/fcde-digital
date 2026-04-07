export default function FCDELayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen overflow-hidden bg-zinc-200 md:h-dvh">
      <div className="h-full box-border flex flex-col px-10 py-4 m">
        <main className="flex-1 min-h-0 overflow-hidden">
          {children}
        </main>
        <footer className="shrink-0 pt-2">
          <div className="flex flex-row items-center justify-between font-medium">
            <span>Período de Retenção: 20 anos após desativação do equipamento ou 25 anos após invalidação do documento.</span>
            <span>LM 14010 R01-04</span>
          </div>
        </footer>
      </div>
    </div>
  );
}