import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6"
    >
      <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Ashok Kumar</h1>
      <p className="text-xl mb-6">
        Engineering Leader • 23+ Years • SaaS & Healthcare Tech
      </p>
      <div className="flex gap-4">
        <a href="#experience">
          <Button className="bg-white text-indigo-600 hover:bg-gray-200">
            View Experience
          </Button>
        </a>
        <a href="#contact">
          <Button className="bg-transparent border border-white hover:bg-white hover:text-indigo-600">
            Get in Touch
          </Button>
        </a>
      </div>
    </section>
  );
}
