import Image from "next/image";
import TechIcons from "./TechIcons";


export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b ">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          About <span className="text-purple-600">Me</span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          I'm a Full Stack Developer with a passion for creating elegant solutions to complex problems. With expertise in modern web technologies, I specialize in building scalable and performant applications that deliver exceptional user experiences.
        </p>
  
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center">Key Skills & Experience:</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300 max-w-4xl mx-auto">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Frontend Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Backend Architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Database Design
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              API Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Cloud Services
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              DevOps
            </li>
          </ul>
        </div>
  
        <div className="pt-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-8">Technologies I Work With</h3>
          <TechIcons />
        </div>
      </div>
    </div>
  </section>
  
  );
}
