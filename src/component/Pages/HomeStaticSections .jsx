// HomeStaticSectionsAdvanced.jsx
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1️⃣",
    title: "Join a Challenge",
    desc: "Participate in ongoing eco-friendly challenges in your community."
  },
  {
    number: "2️⃣",
    title: "Track Progress",
    desc: "Log your activities and see how much impact you are creating."
  },
  {
    number: "3️⃣",
    title: "Share Tips",
    desc: "Contribute your eco-friendly tips and help the community grow."
  }
];

const HomeStaticSectionsAdvanced = () => {
  return (
    <div className=" max-width: 1200px mx-auto px-4 py-16 space-y-24">

      {/* Why Go Green */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
          Why Go Green?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
          <li>Reduce pollution and carbon footprint</li>
          <li>Save energy and natural resources</li>
          <li>Protect wildlife and biodiversity</li>
          <li>Create a healthier environment for everyone</li>
          <li>Promote sustainable community practices</li>
        </ul>
      </motion.section>

      {/* How It Works */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 p-6 rounded-lg shadow-md text-center transition duration-300 cursor-pointer"
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
              >
                {step.number}
              </motion.div>
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default HomeStaticSectionsAdvanced;
