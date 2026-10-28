export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
        <img src={logomarca} className="h-auto w-48" />
      </div>
      <SpotButton />
    </header>
  );
}