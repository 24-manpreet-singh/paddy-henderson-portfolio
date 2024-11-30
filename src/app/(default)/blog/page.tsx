import BlogList from '@/components/molecules/blog-list'
import HeroSection from '@/components/molecules/hero-section'
import Link from 'next/link'
import React, { memo } from 'react'

const BlogWrapper = () => {
    return (
        <React.Fragment>
            <div>

                <HeroSection
                    title="Blogs &amp; News"
                    description="Breaking Stories, Bold Perspectives – Your Front-Row Seat to the Latest"
                    name="paddy Henderson"
                />

                <div className="relative">
                    <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                        <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
                {/* End Hero */}
                {/* Start Section*/}
                <section className="relative md:py-24 py-16">

                    <BlogList
                        title=""
                        description=""
                    />
                    <div className="container relative md:mt-24 mt-16">
                        <div className="grid grid-cols-1 text-center">
                            <span className="text-slate-400 dark:text-white/60 mb-4">Get in Touch With Me</span>
                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Contact me for writing, journalism, and more</h3>
                            <div className="mt-6">
                                <Link href="contact" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl">
                                    <i data-feather="phone" className="h-[15px] w-[15px] me-2" />
                                    Contact us
                                </Link>
                            </div>
                        </div>{/*end grid*/}
                    </div>
                </section>{/*end section*/}

            </div>
        </React.Fragment>
    )
}

export default memo(BlogWrapper)