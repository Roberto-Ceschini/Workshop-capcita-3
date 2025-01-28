export default function Header(){
    return (
        <header className="flex w-[40%] md:w-[65%] items-center justify-center gap-4 bg-white">
          <h1 className="text-orange-500 text-xl ml-3 md:text-6xl font-bold">InstaFluxo</h1>
          <div className="flex items-center gap-6">
            <button className="p-2 rounded-full bg-gray-100">💬</button>
            <button className="p-2 rounded-full bg-gray-100">🔔</button>
          </div>
        </header>
      );
    }