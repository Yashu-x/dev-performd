import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "PAD Ongoing Expert Management",
    description:
      "PAD ongoing management is designed to take your stress away. The PAD team will handle everything, take care of operations, and report directly to you. This approach allows you to focus on business development without worrying about campaign or marketplace shop performance.",
    image: "/port1.jpg",
    size: "sm",
  },
  {
    title: "PAD One-Time Strong Setup",
    description:
      "Get a robust foundation for your campaigns with a one-time setup by the PAD team. This service ensures your marketplace or advertising campaigns are optimized for success from the start.",
    image: "/port2.jpg",
    size: "md",
  },
  {
    title: "Ongoing or One-Time Consulting",
    description:
      "PAD team provides one-time or ongoing step-by-step guidance with data-driven prioritization & optimizations. Ideal for agencies and companies with an in-house team seeking expert insights.",
    image: "/port3.jpg",
    size: "sm",
  },
  {
    title: "Deep One-Time Audit",
    description:
      "Curious if your current setup is effective? PAD team conducts a thorough audit of your entire strategy and setup for a one-time cost, providing insights into areas of improvement.",
    image: "/port4.jpg",
    size: "lg",
  },
  {
    title: "Committed Performance",
    description:
      "Revenue split partnership—less risk for you, higher reward for us. This model ensures PAD is fully invested in your success.",
    image: "/port5.jpg",
    size: "md",
  },
];

const sizeClasses = {
  lg: "h-56 sm:h-96", // Smaller height on mobile
  md: "h-56 sm:h-72",
  sm: "h-56", // Same size across all views
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  return (
    <motion.section
      id="portfolio"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-14 md:py-32 bg-[#F8F8F7] text-black"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          YOU CHOOSE HOW WE <br />
          WORK TOGETHER
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Every business is unique, so we’ve developed a set of adaptable
          frameworks suited to your specific needs. Through proven strategies,
          clear communication, and relentless performance tracking, we help you
          gain and maintain a competitive edge.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg group bg-gray-800 ${
                sizeClasses[project.size]
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div className="relative w-full h-full">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />

                {/* Always visible text overlay */}
                <motion.div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-4 text-center opacity-100">
                  <h3 className="text-2xl md:text-3xl font-semibold p-2 md:p-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-lg p-2 md:p-4">
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
