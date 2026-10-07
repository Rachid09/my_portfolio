"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="space-y-7 text-left">
        {skillsData.map((group, groupIndex) => (
          <div key={group.group}>
            <h3 className="mb-3 text-center text-lg font-semibold text-gray-800 dark:text-white/90">{group.group}</h3>
            <ul className="flex flex-wrap justify-center gap-2 text-sm sm:text-base text-gray-800">
              {group.skills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-4 py-2 dark:bg-white/10 dark:text-white/80"
                  key={skill}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={groupIndex * 5 + index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
