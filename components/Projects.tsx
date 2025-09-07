const projects = [
  {
    title: "EHR Migration & Revival",
    desc: "Led complex migration from Progress DB to PASOE & revived shelved EHR project.",
    tags: ["C#", "Progress ABL", "MSSQL", "Git"],
  },
  {
    title: "DevAcademy Program",
    desc: "Established talent pipeline with 4–5 months training & onboarding program.",
    tags: ["Training", "Mentoring", "Recruitment"],
  },
  {
    title: "Test Automation Scaling",
    desc: "Scaled automation coverage from 19% → 35%, accelerating releases.",
    tags: ["Automation", "CI/CD", "Quality"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
