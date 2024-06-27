import { projects } from "@/utils/projects";
import { mySkills } from "@/utils/skills";
import Image from "next/image";
import Link from "next/link";
import { FaDev, FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

export default function Home2() {
  return (
    <main>
      {/* banner section */}
      <section className="min-h-screen container mx-auto flex items-center relative px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-8 md:gap-16 font-bold">
          <h2 className="text-4xl md:text-6xl">Hello World!</h2>
          <h1 className="text-6xl md:text-8xl">
            It&apos;s Me <span className="text-teal-500">Nadim Chowdhury</span>
          </h1>
          <h3 className="text-2xl md:text-4xl">
            As a Passionate <span className="text-teal-500">MERN/FULL</span>{" "}
            Stack Developer
          </h3>
        </div>

        {/* nav links */}
        <div className="absolute top-0 right-0 h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <Link href="/" className="bg-teal-100 px-2 pt-4 rounded-t-full">
              <FaHome className="w-6 h-6 md:w-8 md:h-8 text-teal-500 hover:text-teal-700" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nadim-chowdhury"
              className="bg-teal-100 px-2 pt-2"
            >
              <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 text-teal-500 hover:text-teal-700" />
            </Link>
            <Link
              href="https://github.com/nadim-chowdhury"
              className="bg-teal-100 px-2 py-2"
            >
              <FaGithub className="w-6 h-6 md:w-8 md:h-8 text-teal-500 hover:text-teal-700" />
            </Link>
            <Link
              href="https://dev.to/nadim_ch0wdhury"
              className="bg-teal-100 px-2 pb-4 rounded-b-full"
            >
              <FaDev className="w-6 h-6 md:w-8 md:h-8 text-teal-500 hover:text-teal-700" />
            </Link>
          </div>
        </div>
      </section>

      {/* skills section */}
      <section className="min-h-screen flex flex-col gap-8 md:gap-16 items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="text-center bg-teal-100 w-full p-6">
          <h2 className="text-3xl md:text-5xl font-bold text-teal-500">
            Skills
          </h2>
        </div>

        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mySkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-teal-50 p-2 rounded-full flex items-center justify-center flex-col text-center"
            >
              <Image
                src={skill.logo}
                width={196}
                height={196}
                alt={skill.name}
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-contain"
              />
              <h4 className="mt-2 text-sm md:text-base">{skill.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* experience section */}
      <section className="min-h-screen flex flex-col gap-8 md:gap-16 items-center justify-center py-20 px-4 md:px-8 lg:px-16">
        <div className="text-center bg-teal-100 w-full p-6">
          <h2 className="text-3xl md:text-5xl font-bold text-teal-500">
            Experience
          </h2>
        </div>

        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-teal-500">
            Jr. Frontend Developer (Mediusware Ltd)
          </h3>
          <p className="text-lg mt-1">01 March, 2024 - Present</p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>
              Developing a drag-and-drop website builder similar to Wix and
              Google Sites.
            </li>
            <li>Working on event management software solutions.</li>
            <li>
              Building a multi-tenancy website builder with subdomain publishing
              functionality.
            </li>
          </ul>
          <p className="mt-2 text-teal-500">
            Technology Used: React JS, GraphQL API, Ant Design, Bootstrap, React
            Router Dom
          </p>
        </div>
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-teal-500">
            Frontend Trainee (Mediusware Ltd)
          </h3>
          <p className="text-lg mt-1">04 December, 2024 - 29 February, 2024</p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>
              Implemented Profile Page CRUD operations and Role-Based actions.
            </li>
            <li>
              Developed Back Office/Tasks CRUD functionalities for store owners
              and employees/drivers.
            </li>
            <li>
              Designed Customer Order CRUD features based on driver/employee
              roles and delivery/pick-up preferences.
            </li>
            <li>
              Implemented logical rendering for the Preferences Page without API
              integration.
            </li>
            <li>
              Led the development of an e-commerce project from scratch,
              including creating a dynamic home page with animations and an
              optimized folder structure.
            </li>
          </ul>
          <p className="mt-2 text-teal-500">
            Technology Used: Next JS, Redux Toolkit, RTK Query, Ant Design,
            Tailwind CSS, REST API
          </p>
        </div>
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-teal-500">
            Frontend Developer (Freelancer)
          </h3>
          <p className="text-lg mt-1">01 June, 2023 - 30 November, 2023</p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>
              Developed frontend solutions for various projects, including a
              School Management System built with Angular and a Flight Ticket
              Booking website with full functionality.
            </li>
            <li>
              Demonstrated expertise in creating dynamic and intuitive user
              interfaces, incorporating real data to enhance user experience.
            </li>
          </ul>
        </div>
      </section>

      {/* projects section */}
      <section className="min-h-screen flex flex-col gap-8 md:gap-16 items-center justify-center py-20 px-4 md:px-8 lg:px-16">
        <div className="text-center bg-teal-100 w-full p-6">
          <h2 className="text-3xl md:text-5xl font-bold text-teal-500">
            Projects
          </h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-teal-500">
                {project.title}
              </h3>
              <p className="mt-2">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 mt-4 inline-block hover:underline"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* education section */}
      <section className="min-h-screen flex flex-col items-center justify-center gap-8 md:gap-16 px-4 md:px-8 lg:px-16">
        <div className="text-center bg-teal-100 w-full p-6">
          <h2 className="text-3xl md:text-5xl font-bold text-teal-500">
            Education
          </h2>
        </div>

        <div className="container mx-auto flex flex-col items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-5xl font-bold text-teal-500">
              BSC (Department of Mathematics)
            </h3>
            <p className="text-lg mt-2">
              Habibullah Bahar University College (2019 - Dropout)
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-5xl font-bold text-teal-500">
              HSC (Science Stream)
            </h3>
            <p className="text-lg mt-2">
              Kabi Nazrul Govt. College (2017 - 2019)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
