"use client";

import React, {useEffect} from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My projects</SectionHeading>
        <p className="mb-3 text-center">
            Below are a few of my projects. To discover full list of university projects, please check my <a className = "underline font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 hover:dark:text-blue-500" href="https://www.linkedin.com/in/shunleyimon724" target="_blank"> LinkedIn</a> and <a className = "underline font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 hover:dark:text-blue-500" href="https://github.com/Shun702" target="_blank">GitHub</a> for personal projects. 
        </p>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
            }
        </div>
    </section>

  ); 
}
