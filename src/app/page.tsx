import Link from "next/link";

export default async function Page() {
  
  
  return(
    <section className="flex justify-center items-center  h-[50vh]">
      
      <Link href={'/blog'} className="btn">Go to Blog Page</Link>

    </section>
  );
}
