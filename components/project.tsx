"use client";

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project({title, description, tags, imageUrl}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress= useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress= useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
        ref={ref} 
        style={{
            scale:scaleProgress,
            opacity:opacityProgress,
        }}
        className="group mb-3 sm:mb-8 last:mb-0 "
        > 
        <section className="bg-gray-100 max-w-[85rem] border border-black/5 rounded-1g overflow-hidden sm:pr-8 relative sm:h-[18rem] mb-3 sm:mb-8 last:mb-0  hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        
        <div className="pt-4 pb-7 px-5 sm:p1-10 sm:pr-2 sm:pt-30 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[25rem]">
            <h3 className="text-2x1 font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag,index) => (
                    <li className="bg-black/[0.7] px-5 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70" key={index}>
                        {tag}</li>
                ))}
            </ul>
        </div>
        
        <Image src={imageUrl} alt="Project I worked on" quality={95} 
        className="absolute hidden sm:block top-9 -right-10 w-[30rem] rounded-t-1g shadow-2x1 
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-7
        group-hober:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-7
        group-even:group-hober:translate-y-3
        group-even:group-hover:rotate-2

        group-even:-right-[initial] 
        group-even:-left-40" />
    </section>
    </motion.div>
    )}
