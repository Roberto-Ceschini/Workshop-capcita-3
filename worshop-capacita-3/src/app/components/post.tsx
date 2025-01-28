
interface props{
    username: string;
    content: string;
}

export default function Post({username, content}: props){
    return (
        <div className="flex flex-col w-[100%] justify-around gap-4 p-4 bg-white shadow-md rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-300 rounded-full" />
            <p className="font-bold">{username}</p>
          </div>
          <div className="h-48 bg-orange-300 rounded-lg" />
          <p>{content}</p>
          <div className="flex space-x-4">
            <button className="text-gray-600">👍</button>
            <button className="text-gray-600">💬</button>
            <button className="text-gray-600">🔗</button>
          </div>
        </div>
      );

}