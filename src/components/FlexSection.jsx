import React from "react";
import { motion } from "framer-motion";

const FlexSection = ({
  title,
  description,
  img,
  lgFlexDirection,
  smFlexDirection,
}) => {
  // Define the default flex direction classes
  const flexDirectionClasses = "flex flex-col md:flex-row";

  // Conditionally update the classes based on the props
  const flexDirection =
    smFlexDirection || lgFlexDirection || flexDirectionClasses;

  return (
    <section
      className={`flex items-center ${flexDirection} justify-between w-10/12 mb-16 md:mb-12 mx-auto`}
    >
      <motion.div
     initial={{ x: -200, opacity: 0 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 1, delay: 0.5 }}
     viewport={{ once: false }} 
      >
        <h1 className="text-black text-3xl font-bold mb-4">{title}</h1>
        <p className="w-11/12 text-lg mb-12 md:mb-0">{description}</p>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
        className="bg-black grid items-center w-4/5 place-items-center md:w-3/5 md:mb-10"
      >
        <img className="w-full relative -top-5 left-5" src={img} alt={title} />
      </motion.div>
    </section>
  );
};

export default FlexSection;
