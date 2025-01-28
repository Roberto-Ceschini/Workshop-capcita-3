interface Anuncio {
    id: number; 
    titulo: string; 
    descricao: string; 
    cor: string;
}

interface Anuncios {
    anuncios: Anuncio[];
}

export default function Anuncios({anuncios}: Anuncios){

return (
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
  );
}