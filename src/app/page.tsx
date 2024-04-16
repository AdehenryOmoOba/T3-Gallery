import Link from "next/link";
import images from "./images"
import { db } from "~/server/db";

export const dynamic = "force-dynamic";



const imgUrls = images.map((imageUrl, id) => ({id: id + 1, imageUrl}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany()

  console.log(posts)

  return (
    <main className="">
      <div>
        {
          posts.map((post) => (<h3 key={post.name}>- {post.name}</h3>))
        }
      </div>
      <div className="flex flex-wrap gap-4">
        {
          imgUrls.map(({id, imageUrl}) => (
          <div key={id} className="w-48">
            <img src={imageUrl} alt={`temple image ${id}`} />
          </div>
        ))
        }
      </div>
    </main>
  );
}
