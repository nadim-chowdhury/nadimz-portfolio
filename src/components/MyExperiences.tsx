export default function MyExperiences() {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-copper">
            Experience
          </h2>
        </div>
        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-copper">
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
                Building a multi-tenancy website builder with subdomain
                publishing functionality.
              </li>
            </ul>
            <p className="mt-2 text-copper">
              Technology Used: React JS, GraphQL API, Ant Design, Bootstrap,
              React Router Dom
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-copper">
              Frontend Trainee (Mediusware Ltd)
            </h3>
            <p className="text-lg mt-1">
              04 December, 2024 - 29 February, 2024
            </p>
            <ul className="list-disc list-inside mt-2 text-lg">
              <li>
                Implemented Profile Page CRUD operations and Role-Based actions.
              </li>
              <li>
                Developed Back Office/Tasks CRUD functionalities for store
                owners and employees/drivers.
              </li>
              <li>
                Designed Customer Order CRUD features based on driver/employee
                roles and delivery/pick-up preferences.
              </li>
              <li>
                Implemented logical rendering for the Preferences Page without
                API integration.
              </li>
              <li>
                Led the development of an e-commerce project from scratch,
                including creating a dynamic home page with animations and an
                optimized folder structure.
              </li>
            </ul>
            <p className="mt-2 text-copper">
              Technology Used: Next JS, Redux Toolkit, RTK Query, Ant Design,
              Tailwind CSS, REST API
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-copper">
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
        </div>
      </div>
    </div>
  );
}
