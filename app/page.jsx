import Image from "next/image";
import home_bird from '@/public/img/home_bird.png'

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-xs">Are you a Tech. Enthusiast ?</p>
        <h1 className="pb-5">
          The World's <span className="special-word">Tech</span><br /> Blogs
        </h1>

        <p>Have you ever found yourself staring at a blank screen struggling to get started or wondering how the best bloggers out there seem to crank out content with great Blog Post Titles effortlessly?

Practice goes a long way. Great bloggers have written a lot of content and many blog post titles. There is no way around it. You need to put in the work.

To help you out, I created AM7Home Blogs that helps you generate your personalised Tech. blogs.</p>
      </div>

      <div className="hidden md:block basis-1/3">
        <Image 
          src={home_bird}
          alt="Home bird"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
