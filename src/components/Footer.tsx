export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-lg">
              &copy; {new Date().getFullYear()} Nadim Chowdhury. All rights
              reserved.
            </p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <a
              href="https://linkedin.com/in/nadim-chowdhury"
              className="text-copper mx-2 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nadim-chowdhury"
              className="text-copper mx-2 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://dev.to/nadim_ch0wdhury"
              className="text-copper mx-2 hover:underline"
            >
              Dev.to
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
