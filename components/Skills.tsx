const skills = [
  "Leadership & Team Building",
  "Technology Strategy",
  "Architecture & Delivery",
  "Program & Product Management",
  "AI & Innovation",
  ".NET / C#",
  "Node.js",
  "React",
  "Python",
  "MongoDB",
  "Kafka",
  "Azure Cloud",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Core Competencies</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow text-gray-800 dark:text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
