"use client"
import React from "react";
import confetti from 'canvas-confetti';

const InstaFluxo = () => {

  const showConfetti = () => {
    confetti();
  };

  const users = [
    { nome: "Story+", cor: "bg-blue-300" },
    { nome: "Bruno", cor: "bg-gray-500" },
    { nome: "Paulo", cor: "bg-red-300" },
    { nome: "Breno", cor: "bg-yellow-300" },
    { nome: "Gabriel", cor: "bg-orange-300" },
    { nome: "Fernanda", cor: "bg-gray-300" },
    { nome: "Renato", cor: "bg-amber-300" },
    { nome: "Larissa", cor: "bg-violet-300" },

  ];

  const posts = [
    { username: "GaBi", content: "Hihihihi" },
    { username: "Karine", content: "Post incrível aqui!" },
    { username: "Lucas", content: "Post incrível aqui!" },
    { username: "Roger", content: "Post incrível aqui!" },
  ];

  const usuario = {
    foto: "bg-green-500",
    nome: "Seu nome"
  }

  const anuncios = [
    { id: 1, titulo: "Produto 1", descricao: "Descrição incrível aqui.", cor: "bg-green-300" },
    { id: 2, titulo: "Produto 2", descricao: "Oferta imperdível só hoje!", cor: "bg-orange-300" },
    { id: 3, titulo: "Produto 3", descricao: "Desconto exclusivo para você.", cor: "bg-purple-300" },
    { id: 4, titulo: "Produto 4", descricao: "Produto de alta qualidade.", cor: "bg-blue-300" },
    { id: 5, titulo: "Produto 5", descricao: "Aproveite as melhores ofertas.", cor: "bg-red-300" },
    { id: 6, titulo: "Produto 6", descricao: "Desconto especial em todos os produtos.", cor: "bg-yellow-300" },
    { id: 7, titulo: "Produto 7", descricao: "Compre e ganhe um brinde!", cor: "bg-teal-300" },
    { id: 8, titulo: "Produto 8", descricao: "Super lançamento com preço baixo.", cor: "bg-pink-300" },
    { id: 9, titulo: "Produto 9", descricao: "Seu produto favorito agora com 20% de desconto!", cor: "bg-indigo-300" },
    { id: 10, titulo: "Produto 10", descricao: "Frete grátis em compras acima de R$100.", cor: "bg-lime-300" },
    { id: 11, titulo: "Produto 11", descricao: "Compre 2 e leve 3! Só até o final do mês.", cor: "bg-gray-300" },
  ];

  return (
    <div className="bg-yellow-100 w-[100vw] h-[100vh] flex flex-col min-w-80">
      <div className="flex h-[15%] justify-around bg-white">
        <header className="flex w-[40%] md:w-[65%] items-center justify-center gap-4 bg-white">
          <h1 className="text-orange-500 text-xl ml-3 md:text-6xl font-bold">InstaFluxo</h1>
          <div className="flex items-center gap-6">
            <button className="p-2 rounded-full bg-gray-100">💬</button>
            <button className="p-2 rounded-full bg-gray-100">🔔</button>
          </div>
        </header>
        <div className="flex flex-row items-center overflow-x-auto -mr-3 w-[30%] md:w-[25%] gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-y-2 text-sm"
            >
              <div className={`w-12 h-12 ${user.cor} rounded-full`} />
              <p>{user.nome}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[100%] h-[85%] justify-center md:justify-between pt-10">
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
            <div className={`w-10 h-10 ${usuario.foto} rounded-full flex justify-center items-center text-blue-700 bg-orange-600`}>
            </div>
            <span className="text-lg font-medium">{usuario.nome}</span>
          </button>
        </div>
        <div className="w-[80vw] flex h-[100%] flex-col justify-around gap-4 overflow-y-auto md:w-[30vw]">
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col w-[100%] justify-around gap-4 p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-300 rounded-full" />
              <p className="font-bold">{post.username}</p>
            </div>
            <div className="h-48 bg-orange-300 rounded-lg" />
            <p>{post.content}</p>
            <div className="flex space-x-4">
              <button className="text-gray-600">👍</button>
              <button className="text-gray-600">💬</button>
              <button className="text-gray-600">🔗</button>
            </div>
          </div>
          ))}
        </div>
        <div className="hidden md:flex flex-col gap-4 bg-gray-100 p-4 w-[30vw] h-[100%]">
          <h2 className="text-lg font-bold mb-2">Anúncios</h2>
          <div className="flex flex-col overflow-y-auto gap-4">
            {anuncios.map((anuncio) => (
              <div
                key={anuncio.id}
                className={`p-4 rounded-lg shadow-md ${anuncio.cor}`}
              >
                <h3 className="font-bold">{anuncio.titulo}</h3>
                <p>{anuncio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaFluxo;
