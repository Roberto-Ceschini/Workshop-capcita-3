import React from "react";
import Header from "./components/header";
import Stories from "./components/stories";
import Post from "./components/post";
import Feed from "./components/feed";
import NavBar from "./components/navBar";
import Anuncios from "./components/anuncios";

const InstaFluxo = () => {

  const users = [
    { nome: "Seu Story", cor: "bg-blue-300" },
    { nome: "PAUlo", cor: "bg-gray-500" },
    { nome: "Cordeirinho", cor: "bg-red-300" },
    { nome: "CECEilia", cor: "bg-yellow-300" },
    { nome: "Gabriel", cor: "bg-orange-300" },
    { nome: "Fernanda", cor: "bg-gray-300" },
    { nome: "Renato", cor: "bg-amber-300" },
    { nome: "Larissa", cor: "bg-violet-300" },
   
  ];

  const posts = [
    { username: "GayBi", content: "Hihihihi" },
    { username: "Karline", content: "Post incrível aqui!" },
    { username: "Karline", content: "Post incrível aqui!" },
    { username: "Karline", content: "Post incrível aqui!" },
  ];

  const usuario = {
    foto: "bg-green-500",
    nome: "LOLmenha"
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
        <Header />
        <Stories users={users} />
      </div>
      <div className="flex w-[100%] h-[85%] justify-center md:justify-between pt-10">
          <NavBar user={usuario} />
          <Feed posts={posts} />
          <Anuncios anuncios={anuncios} />
      </div>
    </div>
  );
};

export default InstaFluxo;
