import Link from "next/link";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

export default async function HomePage() {

  const images = await db.query.image.findMany({
    orderBy: (model, {desc}) => desc(model.id) 
  })

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          images.map(({id, img_url,name}) => (
          <div key={id} className="w-48 flex flex-col">
            <img src={img_url} alt={`temple image ${id}`} />
            <small className="text-center">{name}</small>
          </div>
        ))
        }
      </div>
    </main>
  );
}
