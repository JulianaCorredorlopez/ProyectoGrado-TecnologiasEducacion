import logoJDC from '../assets/logoJDC.png';
import logoDos from '../assets/logoDos.png';

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        border-b border-[#0072CE]/20
        bg-[#00183a]/70
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo + título */}
        <div className="flex items-center gap-4">

          {/* Logo */}
          
            <img
              src={logoDos}
              alt="Logo"
              className="h-15 w-15 object-contain"
            />


          {/* Textos */}
          <div>
            <h1 className="text-xl font-black text-white md:text-2xl">
              Semillero TECSI/ RA & IA
            </h1>

            <p className="text-sm text-[#7eb8f7]">
              Investigación • Innovación • Tecnología
            </p>
          </div>
        </div>

        {/* Badge opcional */}
        <div
          className="
            hidden md:flex
            rounded-full
            border border-[#00A651]/30
            bg-[#00A651]/10
            px-4 py-2
            text-sm font-bold text-emerald-300
          "
        >
          Proyecto Académico
        </div>
      </div>
    </header>
  );
}