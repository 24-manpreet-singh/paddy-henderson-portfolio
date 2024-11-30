import ImageWrapper from '@/components/atoms/image';
import { TEAMMATE_DATA } from '@/constants/teammates-data';
import React from 'react';

const Teammates = () => {
    return (
        <React.Fragment>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium">Meet Our Teammates</h3>
                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>{/*end grid*/}
                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">

                    {TEAMMATE_DATA.map((item, index: number) => {
                        return (
                            <div className="lg:col-span-3 md:col-span-6" key={index}>
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                        <ImageWrapper
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className=''
                                        />
                                        <ul className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                            <li>
                                                <a href="#" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white">
                                                    <i data-feather="facebook" className="h-4 w-4" />
                                                </a>
                                            </li>
                                            <li className="mt-1"><a href="#" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                                            <li className="mt-1"><a href="#" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="content mt-3">
                                        <a href="#" className="text-lg font-medium hover:text-orange-500 duration-500">{item.name}</a>
                                        <p className="text-slate-400 dark:text-white/60">{item.designation}</p>
                                    </div>
                                </div>
                            </div>


                        )
                    })}

                    {/* <div className="lg:col-span-3 md:col-span-6">
                        <div className="group text-center">
                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <ImageWrapper
                                    src={TEAM_SIX_IMAGE}
                                    alt={"feedback-6"}
                                    className=''
                                />
                                <ul className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                    <li><a href="#" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"><i data-feather="facebook" className="h-4 w-4" /></a></li>
                                    <li className="mt-1"><a href="#" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"><i data-feather="instagram" className="h-4 w-4" /></a></li>
                                    <li className="mt-1"><a href="#" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"><i data-feather="linkedin" className="h-4 w-4" /></a></li>
                                </ul>
                            </div>
                            <div className="content mt-3">
                                <a href="#" className="text-lg font-medium hover:text-orange-500 duration-500">Johnny English</a>
                                <p className="text-slate-400 dark:text-white/60">Designer</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </React.Fragment>
    )
}

export default Teammates