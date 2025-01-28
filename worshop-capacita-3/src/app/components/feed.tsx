import Post from "./post";

interface Post {
    username: string;
    content: string;
}

interface Posts {
    posts: Post[];
}

export default function Feed({posts}: Posts){

    
      return (
        <div className="w-[80vw] flex h-[100%] flex-col justify-around gap-4 overflow-y-auto md:w-[30vw]">
          {posts.map((post, index) => (
            <Post key={index} username={post.username} content={post.content} />
          ))}
        </div>
      );
}