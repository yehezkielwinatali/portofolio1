import { useState } from "react";
import cn from "../lib/utils";
const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Next.js", level: 95, category: "frontend" },
  { name: "MongoDB", level: 88, category: "backend" },
  { name: "Prisma", level: 90, category: "backend" },
  { name: "Supabase", level: 90, category: "backend" },
  { name: "Neon", level: 90, category: "backend" },
  { name: "Git/GitHub", level: 95, category: "tools" },
  { name: "Vercel", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
              key={key}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1 text-sm text-muted-foreground">
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
