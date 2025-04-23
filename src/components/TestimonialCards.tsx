"use client";
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import React from 'react'
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

const musicSchoolTestimonials = [
    {
        quote:
            'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
        name: 'Alex Johnson',
        title: 'Guitar Student',
    },
    {
        quote:
            "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
        name: 'Samantha Lee',
        title: 'Piano Student',
    },
    {
        quote:
            "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
        name: 'Michael Chen',
        title: 'Vocal Student',
    },
    {
        quote:
            'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
        name: 'Emily Taylor',
        title: 'Violin Student',
    },
    {
        quote:
            'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
        name: 'Chris Morales',
        title: 'Music Production Student',
    },
];

function TestimonialCards() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    Hear our Harmony: Voices of success
                </div>
                <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">

                    <div className="w-full max-w-6xl">
                        <InfiniteMovingCards
                            items={musicSchoolTestimonials}
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </div>
            </motion.div>
        </AuroraBackground>
    )
}

export default TestimonialCards