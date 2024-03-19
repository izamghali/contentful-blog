'use client'

import { fetchBlogBySlug, fetchBlogs } from "@/lib/blog";
import Link from "next/link";

export default async function Page() {

  const data = await fetchBlogs()

  console.log(data);
   
  return(
    <section className="">
        <div className="flex justify-between items-center p-10">
            <h1 className="text-center font-bold text-xl">Blog Post</h1>
            <Link href={'/'} >Back to Home Page</Link>
        </div>

      <div className="flex justify-center gap-8">
        {
          data.map((item, idx: number) => {
            return <div key={idx} className="card h-[25rem] w-96 bg-base-100 shadow-xl">
            <figure><img src={item.fields.img.fields.file.url} alt="" /></figure>
            <div className="card-body h-full flex flex-col justify-between">
              <h2 className="card-title">
                {item.fields.title}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <div className="card-actions justify-end">
                <Link href={`/blog/${item.fields.slug}`} className="btn">Read More</Link>
                {/* <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div> */}
              </div>
            </div>
          </div>
          })
        }

      </div>

    </section>
  );
}
