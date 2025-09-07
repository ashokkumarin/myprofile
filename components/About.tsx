export default function About() {
  return (
    <section id="about" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center">
        Engineering leader with 23+ years of experience delivering enterprise-scale SaaS & on-premises products across
        Healthcare, EHS, and Test & Measurement domains. Proven track record of building and scaling high-performing
        teams (60+ engineers), driving 20%+ productivity gains, and leading digital transformation initiatives including
        AI integration.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
        <div>
          <h3 className="text-4xl font-bold text-indigo-600">23+</h3>
          <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-indigo-600">60+</h3>
          <p className="text-gray-600 dark:text-gray-400">Engineers Led</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-indigo-600">20%+</h3>
          <p className="text-gray-600 dark:text-gray-400">Productivity Gains</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-indigo-600">92%</h3>
          <p className="text-gray-600 dark:text-gray-400">Team Engagement</p>
        </div>
      </div>
    </section>
  );
}
