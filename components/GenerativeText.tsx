"use client";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import { Button } from "./ui/button";

const words = `Hi, I’m Jami Raza
A passionate Full Stack Developer crafting seamless digital experiences with modern technologies.
Specializing in Flutter, .NET, and powerful backend solutions.
Let’s build something remarkable together.`;

export function TextGenerateEffectDemo() {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-center min-h-[600px] px-4 md:px-8 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-12">
  
  {/* Avatar Section */}
  <div id="home" className="flex-shrink-0">
    <Image 
      src="/unnamed.jpg" 
      alt="Avatar" 
      className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-600 shadow-lg"
      width={100}
      height={100}
    />
  </div>

  {/* Content Section */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
    
    {/* Text Section */}
    <div className="max-w-[600px] md:max-w-[700px] lg:max-w-[900px]">
      <TextGenerateEffect words={words} />
    </div>

    {/* Buttons Section */}
    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
    <Link 
  href="/Resume.pdf"
  download
  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all shadow-md inline-block"
>
  Download CV
</Link>
    
      <Button  className="border-2 border-purple-600  hover:bg-purple-600 hover:text-white px-6 py-2 rounded-full transition-all shadow-md">
        All Projects
      </Button>
    </div>

    {/* Social Media Links */}
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
      <a 
        href="https://github.com/jamiraza" 
        target="_blank" 
        className="text-gray-600 hover:text-purple-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      </a>
      <a 
        href="https://linkedin.com/in/jami-raza" 
        target="_blank" 
        className="text-gray-600 hover:text-purple-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width={4} height={12} x={2} y={9} />
          <circle cx={4} cy={4} r={2} />
        </svg>
      </a>
      <a 
        href="https://twitter.com/jamiraza" 
        target="_blank" 
        className="text-gray-600 hover:text-purple-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>
      <a 
        href="mailto:your.email@example.com" 
        className="text-gray-600 hover:text-purple-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
          <rect width={20} height={16} x={2} y={4} rx={2} />
          <path d="m22 6-10 7L2 6" />
        </svg>
      </a>
    </div>
  </div>
</div>



	);
}
