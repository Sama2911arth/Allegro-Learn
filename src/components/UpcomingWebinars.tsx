"use client"
import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import Link from 'next/link';



const featuredWebinars = [
    {
        title: 'Understanding Music Theory',
        description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug: 'understanding-music-theory',
        isFeatured: true,
        link: '/a'

    },
    {
        title: 'The Art of Songwriting',
        description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
        slug: 'the-art-of-songwriting',
        isFeatured: true,
        link: '/b'

    },
    {
        title: 'Mastering Your Instrument',
        description:
            'Advanced techniques to master your musical instrument of choice.',
        slug: 'mastering-your-instrument',
        isFeatured: true,
        link: '/c'

    },
    {
        title: 'Music Production Essentials',
        description:
            'Get started with music production with this comprehensive overview.',
        slug: 'music-production-essentials',
        isFeatured: true,
        link: '/d'

    },
    // Added two more webinars
    {
        title: 'Live Performance Techniques',
        description:
            'Enhance your live performance skills with expert tips and strategies.',
        slug: 'live-performance-techniques',
        isFeatured: true,
        link: '/e'

    },
    {
        title: 'Digital Music Marketing',
        description:
            'Learn how to promote your music effectively in the digital age.',
        slug: 'digital-music-marketing',
        isFeatured: true,
        link: '/f'

    },
];

function UpcomingWebinars() {
    return (
        <div
            className='py-12 bg-gray-900'
        >
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance your Musical Journey</p>
                </div>
                <div className='mt-10 mr-10 ml-10'>
                    <HoverEffect
                        items={featuredWebinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: webinar.link,
                                key: webinar.slug,
                            }
                        ))}
                    />
                    <div className='mt-10  text-center'>
                        <Link href={"/"}>
                            <button className="px-4 py-2 mt-10 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                                View All Webinars
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars