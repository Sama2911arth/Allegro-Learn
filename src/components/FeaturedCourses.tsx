"use client";
import React from 'react'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';
import courseData from '@/data/music_courses.json'
import Image from 'next/image'

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;

}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
    return (
        <div
            className='py-12 bg-gray-900'
        >
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div
                            key={course.id}
                            className="flex justify-center">

                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                <div>
                                    <Image
                                        src={course.image}
                                        alt="jordans"
                                        height="400"
                                        width="400"
                                        className="object-contain"
                                    />
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {course.title}
                                    </p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {course.description}
                                    </p>
                                    <Link href={`/courses/${course.slug}`}>
                                        <button className="px-4 py-2 mt-10 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                                            Learn More
                                        </button>
                                    </Link>

                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center mt-20">
                <Link href="/courses">
                    <button className="px-4 py-2 mt-10 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                        View All Courses
                    </button>
                </Link>
            </div>


        </div>
    )
}

export default FeaturedCourses