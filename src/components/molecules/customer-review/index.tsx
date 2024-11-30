import ImageWrapper from '@/components/atoms/image';
import { CLIENT_REVIEW_DATA } from '@/constants/client-review-data';
import React from 'react';

const CustomerReview = () => {
    return (
        <React.Fragment>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium">{`Customer's Review`}</h3>
                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
                        {` A trusted voice for compelling storytelling and journalism.`}
                    </p>
                </div>{/*end grid*/}
                {/* <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6"> */}
                <div className="">

                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
                        {CLIENT_REVIEW_DATA.map((item, index: number) => {
                            return (

                                <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900" key={index}>
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <ImageWrapper
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className='h-14 w-14 rounded-full shadow dark:shadow-gray-800'
                                        />
                                        <div className="ps-3">
                                            <a href="#" className="text-[16px] font-medium hover:text-orange-500 duration-500">{item.name}</a>
                                            <p className="text-slate-400 dark:text-white/60">{item.designation || ''}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <p className="text-slate-400 dark:text-white/60">{item.description}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star" /></li>
                                            <li className="inline"><i className="mdi mdi-star" /></li>
                                            <li className="inline"><i className="mdi mdi-star" /></li>
                                            <li className="inline"><i className="mdi mdi-star" /></li>
                                            <li className="inline"><i className="mdi mdi-star" /></li>
                                        </ul>
                                    </div>
                                </li>

                            )
                        })}

                    </ul>

                </div>
            </div>{/*end container*/}































            {/* <div className="container mx-auto w-full overflow-hidden relative">
                <div className="w-full h-full absolute">
                    <div className="w-1/4 h-full absolute z-50 left-0" style={{ background: 'linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }} />
                    <div className="w-1/4 h-full absolute z-50 right-0" style={{ background: 'linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }} />
                </div>
                <div className="carousel-items flex items-center justify-center" style={{ width: 'fit-content', animation: 'carouselAnim 10s infinite alternate linear' }}>
                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '320px' }}>

                        <ul className="space-y-6  sm:block">
                            <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <ImageWrapper
                                        src={TEAM_ONE_IMAGE}
                                        alt={"team-1"}
                                        className='h-14 w-14 rounded-full shadow dark:shadow-gray-800'
                                    />
                                    <div className="ps-3">
                                        <a href="#" className="text-[16px] font-medium hover:text-orange-500 duration-500">Thomas Israel</a>
                                        <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '320px' }}>

                        <ul className="space-y-6 sm:block">
                            <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <ImageWrapper
                                        src={TEAM_ONE_IMAGE}
                                        alt={"team-1"}
                                        className='h-14 w-14 rounded-full shadow dark:shadow-gray-800'
                                    />
                                    <div className="ps-3">
                                        <a href="#" className="text-[16px] font-medium hover:text-orange-500 duration-500">Thomas Israel</a>
                                        <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div><div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '320px' }}>

                        <ul className="space-y-6 sm:block">
                            <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <ImageWrapper
                                        src={TEAM_ONE_IMAGE}
                                        alt={"team-1"}
                                        className='h-14 w-14 rounded-full shadow dark:shadow-gray-800'
                                    />
                                    <div className="ps-3">
                                        <a href="#" className="text-[16px] font-medium hover:text-orange-500 duration-500">Thomas Israel</a>
                                        <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div><div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '320px' }}>

                        <ul className="space-y-6 sm:block">
                            <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <ImageWrapper
                                        src={TEAM_ONE_IMAGE}
                                        alt={"team-1"}
                                        className='h-14 w-14 rounded-full shadow dark:shadow-gray-800'
                                    />
                                    <div className="ps-3">
                                        <a href="#" className="text-[16px] font-medium hover:text-orange-500 duration-500">Thomas Israel</a>
                                        <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div><div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '320px' }}>

                        <ul className="space-y-6 sm:block">
                            <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <ImageWrapper
                                        src={TEAM_ONE_IMAGE}
                                        alt={"team-1"}
                                        className='h-14 w-14 rounded-full shadow dark:shadow-gray-800'
                                    />
                                    <div className="ps-3">
                                        <a href="#" className="text-[16px] font-medium hover:text-orange-500 duration-500">Thomas Israel</a>
                                        <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '320px' }}>

                        <ul className="space-y-6 sm:block">
                            <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <ImageWrapper
                                        src={TEAM_ONE_IMAGE}
                                        alt={"team-1"}
                                        className='h-14 w-14 rounded-full shadow dark:shadow-gray-800'
                                    />
                                    <div className="ps-3">
                                        <a href="#" className="text-[16px] font-medium hover:text-orange-500 duration-500">Thomas Israel</a>
                                        <p className="text-slate-400 dark:text-white/60">C.E.O</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                        <li className="inline"><i className="mdi mdi-star" /></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}









        </React.Fragment>
    )
}

export default CustomerReview