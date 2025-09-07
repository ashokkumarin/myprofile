export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="border-l-4 border-indigo-600 pl-4">
          <h3 className="text-xl font-semibold">Director of Development Engineering – Greenway Health</h3>
          <p className="text-gray-600 dark:text-gray-300">2024 – Present | Bengaluru, India</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Led 60+ engineers delivering EHR products</li>
            <li>Scaled test automation 19% → 35%</li>
            <li>Launched DevAcademy talent program</li>
          </ul>
        </div>
        <div className="border-l-4 border-indigo-600 pl-4">
          <h3 className="text-xl font-semibold">Senior Software Development Manager & Site Lead – Intelex Technologies</h3>
          <p className="text-gray-600 dark:text-gray-300">2022 – 2024 | Remote</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Built 7 Agile teams & scaled site to 60+ engineers</li>
            <li>Reduced onboarding ramp-up to 1 month</li>
            <li>Introduced SAFe methodology & vendor governance</li>
          </ul>
        </div>
        <div className="border-l-4 border-indigo-600 pl-4">
          <h3 className="text-xl font-semibold">Engineering Manager – Tektronix</h3>
          <p className="text-gray-600 dark:text-gray-300">2016 – 2022 | Bengaluru, India</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Delivered 40+ high-speed test products</li>
            <li>Increased engagement 57% → 92%</li>
            <li>Transitioned legacy to web-based architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
