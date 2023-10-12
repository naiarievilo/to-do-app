export function AuthBackground() {
  return (
    <div
      className="fixed -z-10 h-full w-full bg-[url('@assets/auth-bg.jpg')]
      bg-cover bg-fixed bg-no-repeat"
      aria-hidden={true}
    >
      <div className="min-h-screen bg-slate-900/40 backdrop-blur"></div>
    </div>
  );
}
