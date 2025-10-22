"use client"

import Marquee from "react-fast-marquee"
import Image from "next/image"

const skills = [
  { name: "React", logo: "/skills/react-original.svg" },
  { name: "Next.js", logo: "/skills/nextjs-original.svg" },
  { name: "TypeScript", logo: "/skills/typescript-original.svg" },
  { name: "Tailwind CSS", logo: "/skills/tailwindcss-original.svg" },
  { name: "Redux", logo: "/skills/redux-original.svg" },
  { name: "Node.js", logo: "/skills/nodejs-original.svg" },
  { name: "Express", logo: "/skills/express-original.svg" },
  { name: "Python", logo: "/skills/python-original.svg" },
  { name: "FastAPI", logo: "/skills/fastapi-original.svg" },
  { name: "PostgreSQL", logo: "/skills/postgresql-original.svg" },
  { name: "MongoDB", logo: "/skills/mongodb-original.svg" },
  { name: "Supabase", logo: "/skills/supabase-original.svg" },
  { name: "Redis", logo: "/skills/redis-original.svg" },
  { name: "Docker", logo: "/skills/docker-original.svg" },
  { name: "Kubernetes", logo: "/skills/kubernetes-original.svg" },
  { name: "Git", logo: "/skills/git-original.svg" },
  { name: "Linux", logo: "/skills/linux-original.svg" },
  { name: "TensorFlow", logo: "/skills/tensorflow-original.svg" },
  { name: "PyTorch", logo: "/skills/pytorch-original.svg" },
  { name: "Scikit-learn", logo: "/skills/scikitlearn-original.svg" },
  { name: "Pandas", logo: "/skills/pandas-original.svg" },
  { name: "NumPy", logo: "/skills/numpy-original.svg" },
]

export default function SkillsMarqueeSection() {
  return (
    <section id="skills" className="w-full py-20 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Tech Stack</h2>
        <p className="text-base text-gray-500">Technologies I master and love to work with</p>
      </div>

      {/* Three ribbons—no max-width to fill the browser */}
      {/* Ribbon 1 */}
      <Marquee speed={32} gradient={false} direction="left" className="py-2">
        {skills.map(({ name, logo }) => (
          <div key={"first-"+name} className="flex items-center gap-x-4 px-8">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-white shadow ring-1 ring-gray-200 flex items-center justify-center">
              <Image src={logo} alt={`${name} logo`} width={32} height={32} className="object-contain w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <span className="font-medium text-base sm:text-lg text-gray-800 whitespace-nowrap">{name}</span>
          </div>
        ))}
      </Marquee>

      {/* Ribbon 2 */}
      <Marquee speed={37} gradient={false} direction="right" className="py-2">
        {skills.map(({ name, logo }) => (
          <div key={"second-"+name} className="flex items-center gap-x-4 px-8">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-white shadow ring-1 ring-gray-200 flex items-center justify-center">
              <Image src={logo} alt={`${name} logo`} width={32} height={32} className="object-contain w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <span className="font-medium text-base sm:text-lg text-gray-800 whitespace-nowrap">{name}</span>
          </div>
        ))}
      </Marquee>

      {/* Ribbon 3 */}
      <Marquee speed={25} gradient={false} direction="left" className="py-2">
        {skills.map(({ name, logo }) => (
          <div key={"third-"+name} className="flex items-center gap-x-4 px-8">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-white shadow ring-1 ring-gray-200 flex items-center justify-center">
              <Image src={logo} alt={`${name} logo`} width={32} height={32} className="object-contain w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <span className="font-medium text-base sm:text-lg text-gray-800 whitespace-nowrap">{name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
