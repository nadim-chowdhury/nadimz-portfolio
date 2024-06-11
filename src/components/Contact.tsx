export default function Contact() {
  return (
    <div id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-copper">
            Contact Me
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Feel free to get in touch with me. I am open to discussing new
            projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label
                className="block text-copper text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full bg-white text-black border border-copper rounded py-2 px-4 leading-tight focus:outline-none focus:border-copper"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-copper text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-white text-black border border-copper rounded py-2 px-4 leading-tight focus:outline-none focus:border-copper"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-copper text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-white text-black border border-copper rounded py-2 px-4 leading-tight focus:outline-none focus:border-copper"
                id="message"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-copper text-black py-2 px-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
