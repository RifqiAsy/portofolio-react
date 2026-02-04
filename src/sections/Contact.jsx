import SocialIcon from "../components/common/SocialIcon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let’s work together
          </h2>

          <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
            I’m open for collaboration, freelance projects, or just a friendly
            chat about frontend development and UI design.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">
            <SocialIcon type="github" />
            <SocialIcon type="instagram" />
            <SocialIcon type="linkedin" />
            <SocialIcon type="email" />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <form className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg resize-none
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg
                         font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
