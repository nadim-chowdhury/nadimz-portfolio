import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold text-copper">
          <Link href="/">Nadim Chowdhury</Link>
        </div>
        <nav className="space-x-4 text-lg hidden md:block">
          <Link href="#about">
            <span className="text-copper hover:underline">About</span>
          </Link>
          <Link href="#skills">
            <span className="text-copper hover:underline">Skills</span>
          </Link>
          <Link href="#experience">
            <span className="text-copper hover:underline">Experience</span>
          </Link>
          <Link href="#projects">
            <span className="text-copper hover:underline">Projects</span>
          </Link>
          <Link href="#education">
            <span className="text-copper hover:underline">Education</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
