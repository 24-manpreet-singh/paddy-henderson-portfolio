import ImageWrapper from '@/components/atoms/image';
import { WHAT_WE_DO_DATA } from '@/constants/what-we-do-data';
import Link from "next/link";
import React, { memo } from 'react';

const WhatWeDo = () => {
    return (
        <React.Fragment>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">What I do?</h3>
                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
                        Crafting compelling stories with precision, passion, and integrity—bringing you insightful journalism, engaging features, and well-researched content that informs, entertains, and inspires.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {WHAT_WE_DO_DATA.map((item, index: number) => {
                        return (
                            <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl  text-center" key={index}>
                                <div className="relative  text-transparent ">
                                    <i data-feather="hexagon" className="h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]" />
                                    <div className=" text-orange-500 rounded-xl transition duration-500 ease-in-out flex align-middle justify-center items-center">
                                        <ImageWrapper
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className='abc '
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href="about-us" className="text-lg font-medium duration-500 hover:text-orange-500">{item.title}</Link>
                                    <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default memo(WhatWeDo)