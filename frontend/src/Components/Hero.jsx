import { motion } from "framer-motion";

const Hero = () => {
  const images = {
    image1:
      "https://i.ibb.co/db8NFt3/teacher-brunette-instructor-with-computer-suit-whiteboard-classroom-holding-chin-140725-163253.jpg",
    image2:
      "https://i.ibb.co/n1MXj3Z/young-smiling-pretty-caucasian-schoolgirl-wearing-glasses-sits-desk-with-school-tools-points-herself.jpg",
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-blue-50 py-16 lg:mt-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
            }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800"
          >
            Discover Your Next{" "}
            <span className="text-blue-600">Opportunity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: "easeIn",
            }}
            className="text-lg text-gray-600"
          >
            Your career journey starts here. Use our advanced tools to find
            jobs, build your skills, and achieve your goals.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start gap-4 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "easeOut",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="relative md:w-1/2 flex flex-col md:flex-row justify-center items-center gap-4">
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-blue-300 to-blue-600 shadow-xl flex items-center justify-center"
          >
            <img
              src={images.image1}
              alt="Teacher instructor"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-purple-300 to-purple-600 shadow-xl flex items-center justify-center"
          >
            <img
              src={images.image2}
              alt="Smiling schoolgirl"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
