const MySkills = () => {
  return (
    <div className="bg-black text-white py-20 my_skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-copper">
            My Skills
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Here are some of the technologies and tools I have experience with:
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-copper">Frontend</h3>
            <ul className="mt-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React JS</li>
              <li>Next JS</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Sass</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-copper">Backend</h3>
            <ul className="mt-2">
              <li>Node JS</li>
              <li>Express JS</li>
              <li>Nest JS</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-copper">Database</h3>
            <ul className="mt-2">
              <li>MongoDB</li>
              <li>Postgre SQL</li>
              <li>My SQL</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-copper">Tools & Others</h3>
            <ul className="mt-2">
              <li>Git</li>
              <li>GraphQL API</li>
              <li>RESTful API</li>
              <li>Redux Toolkit</li>
              <li>RTK Query</li>
              <li>Ant Design</li>
              <li>Material UI</li>
              <li>React Router Dom</li>
              <li>REST API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
