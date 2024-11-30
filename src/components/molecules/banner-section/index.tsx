import React, { memo } from 'react'
import HERO_IMAGE from "@/assets/images/hero.png";
import ImageWrapper from '@/components/atoms/image';
import Link from 'next/link';

const BannerSection = () => {
    return (
        <React.Fragment>
            <section className="relative overflow-hidden md:flex md:h-screen pt-28 pb-14 items-center bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                        <div>
                            <h5 className="font-semibold leading-normal text-[20px] mt-6">{`Hi, I'm `}<span className="typewrite" > Paddy Henderson</span></h5>
                            <h5 className="md:text-5xl md:leading-normal text-3xl leading-normal font-bold mt-3">{`A Writer  & `} <br /> {`Journalist`}</h5>
                            <p className="text-slate-400 dark:text-white/60 text-[17px] max-w-xl mt-4"> {`Empowering growth through insightful content and compelling storytelling, Writer blends the power of lifelong learning with journalistic integrity to inform, inspire, and engage`}</p>
                            <div className="relative mt-6">
                                <Link href="service" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl">Explore Work <i className="mdi mdi-arrow-right ms-2" /></Link>
                            </div>
                        </div>
                        <div className="relative lg:ms-6 before:content-[''] before:absolute before:start-1/2 before:-translate-x-1/2 rtl:before:translate-x-1/2 before:bottom-1/2 before:translate-y-1/2 before:w-[48rem] before:h-[20rem] before:rounded-[18rem] ltr:before:rotate-[135deg] rtl:before:rotate-[45deg] before:bg-orange-500 dark:before:bg-orange-500">
                            <div className="relative z-1">

                                <ImageWrapper
                                    src={HERO_IMAGE}
                                    alt={"hero-image"}
                                    className=''
                                />
                                <div className="absolute lg:bottom-20 -bottom-5 md:-start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                    <span className="text-3xl font-medium mb-0"><span className="counter-value font-bold" data-target={125}>25</span>+</span>
                                    <h6 className="text-sm text-slate-400 mt-1">Project Completed</h6>
                                </div>
                                <div className="absolute md:top-20 top-32 md:-end-10 -end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                    <h6 className="font-semibold">Writer  & Journalist</h6>
                                    <h6 className="text-sm text-slate-400 mt-1">8+ Years Experience</h6>
                                </div>
                            </div>
                        </div>
                    </div>{/*end grid*/}
                </div>{/*end container*/}
            </section>{/*end section*/}


        </React.Fragment>
    )
}

export default memo(BannerSection)