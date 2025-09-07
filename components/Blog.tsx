export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Insights</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">AI in Healthcare</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Exploring AI-driven innovation in healthcare technology and its impact on patient care.
          </p>
          <span className="text-sm text-gray-500 dark:text-gray-400">Q1 2024</span>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Team Building</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Strategies for scaling engineering teams effectively and maintaining high engagement.
          </p>
          <span className="text-sm text-gray-500 dark:text-gray-400">Q2 2024</span>
        </div>
      </div>
    </section>
  );
}
