import ImageWrapper from '@/components/atoms/image';
import { CLIENT_REVIEW_DATA } from '@/constants/client-review-data';
import React from 'react';

const CustomerReview = () => {
    return (
        <React.Fragment>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium">{`Customer's Review`}</h3>
                    <p className="text-slate-400  max-w-xl mx-auto">
                        {` A trusted voice for compelling storytelling and journalism.`}
                    </p>
                </div>{/*end grid*/}
                {/* <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6"> */}
                <div className="">

                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
                        {CLIENT_REVIEW_DATA.map((item, index: number) => {
                            return (

                                <li className="rounded-xl shadow  p-6 bg-white " key={index}>
                                    <div className="flex items-center pb-6 border-b border-gray-100 ">
                                        <ImageWrapper
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className='h-14 w-14 rounded-full shadow '
                                        />
                                        <div className="ps-3">
                                            <a href="#" className="text-[16px] font-medium hover:text-orange-500 duration-500">{item.name}</a>
                                            <p className="text-slate-400 ">{item.designation || ''}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <p className="text-slate-400 ">{item.description}</p>
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

        </React.Fragment>
    )
}

export default CustomerReview