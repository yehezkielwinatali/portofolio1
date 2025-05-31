import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "PathWise",
    description:
      "PathWise is an AI powered career coaching platform that automatically generate a resume, provides quiz to prepare you for job interview, and generates cover letter for you.",
    image: "/projects/pathwise.png",
    tags: [
      "inngest",
      "typescript",
      "prisma",
      "neon",
      "nextjs",
      "tailwind",
      "framer-motion",
      "gemini-ai",
    ],
    demoUrl: "https://path-wise.netlify.app/",
    githubUrl: "https://github.com/yehezkielwinatali/PathWise.git",
  },
  {
    id: 2,
    title: "Angelomotive",
    description:
      "Angelomotive is an AI powered car dealership website that helps you find your preferred car. Upload a picture of the car you want, and AI will find the best match for you. EMI calculator is also available to help you calculate your monthly payment.",
    image: "/projects/angelomotive.png",
    tags: [
      "tailwind",
      "nextjs",
      "prisma",
      "supabase",
      "typescript",
      "gemini-ai",
    ],
    demoUrl: "https://angelomotive.vercel.app/",
    githubUrl: "https://github.com/yehezkielwinatali/Angelomotive.git",
  },
  {
    id: 3,
    title: "JagaUang",
    description:
      "JagaUang is an AI assisted personal finance management app that helps you track your expenses and income with recurring alerts every month using Inngest and give you insights from Gemini AI. Take a picture of your receipt and AI will extract the details for you.",
    image: "/projects/jagauang.png",
    tags: [
      "nextjs",
      "prisma",
      "inngest",
      "supabase",
      "tailwind",
      "typescript",
      "framer-motion",
      "gemini-ai",
    ],
    demoUrl: "https://jagauang.vercel.app/",
    githubUrl: "https://github.com/yehezkielwinatali/jagauang.git",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects showcase my ability to build full-stack, AI-integrated
          web applications using modern technologies like Next.js, TypeScript,
          Prisma, and Tailwind CSS. PathWise assists with resumes and interview
          prep, Angelomotive helps users find cars using image search and EMI
          tools, and JagaUang manages personal finances with receipt scanning
          and smart insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 
                  hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 
                  hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/yehezkielwinatali"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
