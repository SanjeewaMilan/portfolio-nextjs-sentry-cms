import Image from "next/image";

export default async function Home() {

  return (
    <main className="container p-16 max-w-screen max-h-screen">
      <div className="flex flex-row h-full">
        <div className="flex-1 bg-red-300">
          <h2 className="text-5xl">My Name is <span className="font-bold">Sanjeewa Milan</span></h2>

          <h3 className="text-3xl italic ">Software Engineer </h3>

          <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit dui non libero fermentum tempus. Etiam vulputate libero purus, et suscipit justo volutpat nec. Etiam vel tincidunt magna. Pellentesque ut vehicula est. Etiam odio augue, auctor vel augue in, </p>

        </div>
        <div className="flex-1">

          <Image src={'/assest/portfolio-sample-1.png'} alt={""} width={660} height={750} />
        </div>
      </div>

      {/* <div className="grid grid-cols-2 h-screen ">
        <div className=" bg-red-300">01</div>
        <div className=" bg-blue-300">02</div>
      </div> */}
    </main>
  );
}
