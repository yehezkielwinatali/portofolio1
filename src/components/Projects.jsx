import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "AngeloTrails",
    description: "This is my first project about campgrounds.",
    image: "/projects/angelocamp.png",
    tags: ["javascript", "css", "nodejs", "express", "html"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AngeloEstate",
    description: "This is my second project about real estate properties.",
    image: "/projects/realestate.png",
    tags: ["react", "tailwind", "css", "javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "JustDoList",
    description: "This is my third project about modern to-do list.",
    image: "/projects/todolist.png",
    tags: ["react", "tailwind"],
    demoUrl: "#",
    githubUrl: "#",
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus nemo suscipit nihil placeat maiores corporis et
          voluptatibus! Quidem assumenda rem, iusto sed quia odio voluptatem,
          ratione atque cupiditate vel aut.
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
                      href="https://github.com/yehezkielwinatali"
                      className="text-foreground/80 
                  hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href="https://github.com/yehezkielwinatali"
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
