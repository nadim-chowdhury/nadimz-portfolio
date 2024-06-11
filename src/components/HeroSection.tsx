import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-t from-black via-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-hero-pattern opacity-50"></div>
      <div className="relative z-10 text-center">
        <h3 className="text-2xl md:text-6xl font-bold mb-4 text-white animate-fade-in-up">
          Hello World!
        </h3>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-copper animate-fade-in-up py-4">
          It&apos;s Me Nadim Chowdhury
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
          As a passionate <span className="text-copper">MERN/FULL</span> Stack
          Developer from Dhaka, Bangladesh
        </p>
        <Link
          href="mailto:nadim-chowdhury@outlook.com"
          className="bg-copper text-black py-2 px-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 animate-fade-in-up animation-delay-400"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
