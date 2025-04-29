import Image from "next/image";
// ProjectSection from "@/app/components/ProjectSection";
import ProjectSection from "../components/ProjectSection";
import PostSection from "../components/PostsSection";



export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className = "relative">
        <div className="opacity-15">
        <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-purple-700/50 rounded-full blur-3xl"></div>
        <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-purple-500/60 rounded-full blur-2xl"></div>
        <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-purple-400/70 rounded-full blur-xl"></div>
        </div>
        <h1 className="text-4xl font-bold tracking-light">
        All your subscriptions under one
        roof <span className="block
          text-primary">at Fleek</span></h1>
        <p className="mt-6 text-xl text-gray-300 leading-8">Fleek is India's largest subscription marketplace and management app with the top subscription discounts, and the tools to manage all your subscriptions ...
        </p>
      </div>
      <div className="flex mt-10 gap-4">
        <button className="px-8 py-3 rounded-lg
        border border-gray-600 hover:border-primary font-medium">About us</button>
        <button className="px-8 py-3 rounded-lg
        border border-gray-600 hover:border-purple-500 font-medium">Contact us</button>
      </div> 
      <ProjectSection />
      <PostSection/>
    </div>

  );
}
