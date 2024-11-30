
import ABOUT_IMAGE from "@/assets/images/about.png";
import ABOUT_IMAGE_2 from "@/assets/images/about2.jpg";
import ImageWrapper from '@/components/atoms/image';
import React from 'react';

const AboutUS = () => {
    return (
        <React.Fragment>

            <div className="container relative md:pb-24 pb-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <div className="relative flex justify-end">
                                <ImageWrapper
                                    src={ABOUT_IMAGE}
                                    alt={"about us"}
                                    className='lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700'
                                />
                                <div className="absolute top-0 translate-y-2/4 start-0 text-center">
                                    <a href="#!" data-type="youtube" className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                                    </a>
                                </div>
                            </div>
                            <div className="absolute md:-start-5 start-0 -bottom-16">
                                <ImageWrapper
                                    src={ABOUT_IMAGE_2}
                                    alt={"about"}
                                    className='lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="pt-16 md:pt-0 lg:ms-5">
                            <h6 className="text-orange-500 text-sm font-medium uppercase mb-2">About us</h6>
                            <h3 className="mb-4 md:text-2xl text-xl font-medium">My Mission</h3>
                            <p className="text-slate-400 dark:text-white/60 max-w-xl">As experienced writers and journalists, we specialize in bringing clarity to complex topics, offering fresh perspectives on current events, culture, and more. With a commitment to accuracy, integrity, and creativity, we strive to inform, inspire, and spark meaningful conversations</p>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400 dark:text-white/60">Interviewing Skills</span>
                                    <span className="text-slate-400 dark:text-white/60">99%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-orange-500 h-[6px] rounded-full" style={{ width: '95%' }} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400 dark:text-white/60">Adaptability</span>
                                    <span className="text-slate-400 dark:text-white/60">92%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-orange-500 h-[6px] rounded-full" style={{ width: '92%' }} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400 dark:text-white/60">Storytelling</span>
                                    <span className="text-slate-400 dark:text-white/60">95%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-orange-500 h-[6px] rounded-full" style={{ width: '95%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*grid*/}
            </div>{/*end container*/}

        </React.Fragment>
    )
}

export default AboutUS