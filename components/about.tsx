"use client";

import React, {useEffect} from 'react';
import SectionHeading from './section-heading';
import {motion} from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
    ref= {ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0}}
    transition= {{ delay: 0.175 }}
    id="about">
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        I hold a <span className="font-medium">BSc in Computer Science</span> from <span className="font-medium">the University of Manchester</span>, where I honed my skills and developed a strong foundation in the world of technology. What drives me in the field of software development is the intricate dance of  <span className="italic">developing and debugging</span>, unraveling complex challenges to create elegant solutions. Currently, I find immense joy in exploring and mastering new frameworks, constantly pushing the boundaries of my knowledge and capabilities. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        badminton, going to the gym, and playing video game. I also enjoy{" "}
        <span className="font-medium">reading books outside of my field</span>. I am currently
        learning about{" "}
        <span className="font-medium">finance and investment</span>.
        </p>
    </motion.section>
  );
}
