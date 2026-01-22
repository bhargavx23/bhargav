import LogoSection from "../Logos/LogoSection";

const ContactPage = () => {
  return (
    <div className="flex  h-screen md:max-h-[89vh]">
      <div className="  bg-[rgb(14,9,17)] md:max-h-full w-full min-h-screen flex flex-col md:flex-row md:justify-center gap-10 items-center  p-6">
        <p className=" md:absolute top-40 left-55 SlideDownYtoX z-1 text-7xl font-bold font-mono  md:text-purple-500 text-[rgb(120,23,176)] font-poppins mb-4">
          Let's Connect
        </p>

        <div className=" SlideDownYtoX z-5 relative bg-[rgb(120,23,176)] md:bg-purple-600 h-[500px] md:h-[600px] md:w-1/2 space-y-4 flex flex-col justify-center items-center  w-full p-4 rounded-2xl">
          <h1 className="absolute left-4 top-5 text-2xl  md:text-2xl font-bold bg-purple-400 p-4 rounded-3xl">
            Bhargav
          </h1>

          <form
            className="space-y-4 flex justify-center items-center h-full flex-col w-full"
            action={"https://api.web3forms.com/submit"}
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="eafe7eb1-1b25-49e8-a34a-1e5922592b6c"
            />
            <input
              className="border-2 md:hover:scale-105 transition-all transform duration-300 ease-in-out border-white/60 w-full p-4 rounded-xl md:w-3/4 md:p-6 placeholder:text-black outline-none"
              type="text"
              placeholder="Username"
              required
              name="Username"
            />
            <input
              className="border-2 md:hover:scale-105 transition-all transform duration-300 ease-in-out border-white/60 w-full p-4 rounded-xl md:w-3/4 md:p-6 placeholder:text-black outline-none"
              type="email"
              placeholder="Enter Your Email"
              required
              name="Email"
            />
            <textarea
              className=" md:hover:scale-105 transition-all transform duration-300 ease-in-out border-2 border-white/60 w-full p-4 rounded-xl md:w-3/4 md:p-6 placeholder:text-black outline-none"
              type="text"
              placeholder="Message / Suggestions"
              required
              name="Message/suggestion"
            />
            <button
              required
              type="submit"
              className="bg-white px-8 py-4 md:bg-purple-00 md:px-8 md:py-4 rounded-3xl md:text-3xl font-bold active:scale-90 transition-all duration-300 "
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" hidden md:flex h-[60%]  items-end z-1 SlideDownYtoX">
          <div className="hidden md:flex flex-col p-6 items-center md:h-fit md:bg-purple-600 md:w-[500px] rounded-3xl">
            <h1 className="font-bold text-3xl ">Socials</h1>
            <div>
              <LogoSection />
              <div className="flex gap-5 bg-black p-3  rounded-3xl">
                <img src="./src/Logos/mailimage.png" alt="mail" />
                <a
                  href="mailto:Bhargavpasupuleti5@gmail.com?subject=Hello%20Bhargav"
                  className="text-white"
                >
                  Bhargavpasupuleti5@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
