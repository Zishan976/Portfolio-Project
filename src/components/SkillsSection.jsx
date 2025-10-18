import React, { use, useState } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 100, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "React Router", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Styled Components", level: 70, category: "frontend" },
  { name: "CSS Modules", level: 70, category: "frontend" },
  { name: "BootsTrap", level: 80, category: "frontend" },
  { name: "JQuery", level: 70, category: "frontend" },
  { name: "Daisy UI", level: 80, category: "frontend" },
  { name: "Material UI", level: 80, category: "frontend" },
  { name: "Lucide / Tabler Icons", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "Mongoose", level: 65, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "JWT", level: 80, category: "backend" },
  { name: "Passport.js", level: 80, category: "backend" },
  { name: "bcrypt", level: 80, category: "backend" },
  { name: "Auth0", level: 80, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "npm", level: 80, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postmen", level: 95, category: "tools" },
  { name: "Vite", level: 100, category: "tools" },
  { name: "Render / Railway", level: 80, category: "tools" },
  { name: "Vercel / Netlify", level: 80, category: "tools" },
  { name: "Pg Admin 4", level: 95, category: "tools" },
];

const SkillsSection = () => {
  const [activeCatagory, setActiveCatagory] = useState("all");
  const catagories = ["all", "frontend", "backend", "tools"];
  const filteredSkills =
    activeCatagory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCatagory);
  return (
    <section
      id="skills"
      className="container py-24 px-4 relative bg-secondary/30"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex justify-center mb-12 space-x-4">
          {catagories.map((catagorie, key) => (
            <button
              key={key}
              onClick={() => setActiveCatagory(catagorie)}
              className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                activeCatagory === catagorie
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent border-gray-300 hover:bg-primary/10 hover:border-primary hover:text-primary"
              }`}
            >
              {catagorie.charAt(0).toUpperCase() + catagorie.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h1 className="font-semibold text-lg">{skill.name}</h1>
              </div>
              <div className="w-full rounded-full h-2 overflow-hidden bg-black/10">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_0.5s_ease-in-out_forwards]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1 text-sm">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
