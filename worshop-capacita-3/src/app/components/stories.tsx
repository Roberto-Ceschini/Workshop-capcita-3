
interface User {
    nome: string;
    cor: string;
  }
  
  interface StoriesProps {
    users: User[];
  }
  

export default function Header({users}: StoriesProps){

  return (
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
  );
}