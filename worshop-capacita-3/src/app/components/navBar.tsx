"use client"
import confetti from 'canvas-confetti';

interface Usuario{
    foto: string;
    nome: string;
}

interface User {
    user: Usuario;
}

const showConfetti = () => {
    confetti();
  };

export default function NavBar({user}: User){
    return (
        <div className="hidden md:flex flex-col justify-between h-[90%] w-[25vw] p-4">
          {/* Logo */}
          <div className=" flex text-3xl font-bold mb-8 text-orange-600">InstaFluxo</div>
    
          {/* Links de navegação */}
          <nav className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded-md">
              <div className="w-6 h-6 bg-orange-600 text-white flex justify-center items-center rounded-full">
                H
              </div>
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded-md">
              <div className="w-6 h-6 bg-orange-600 text-white flex justify-center items-center rounded-full">
                E
              </div>
              <span>Explorar</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded-md">
              <div className="w-6 h-6 bg-orange-600 text-white flex justify-center items-center rounded-full">
                P
              </div>
              <span>Perfil</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:bg-blue-500 p-2 rounded-md">
              <div className="w-6 h-6 bg-orange-600 text-white flex justify-center items-center rounded-full">
                N
              </div>
              <span>Notificações</span>
            </a>
          </nav>
          {/* Botão de perfil do usuário */}
          <button className="flex items-center gap-4 p-2 rounded-lg hover:bg-blue-500 cursor-pointer" onClick={showConfetti}>
            <div className={`w-10 h-10 ${user.foto} rounded-full flex justify-center items-center text-blue-700 bg-orange-600`}>
            </div>
            <span className="text-lg font-medium">{user.nome}</span>
          </button>
        </div>
      );
}