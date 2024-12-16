"use client"
import ImageWrapper from '@/components/atoms/image'
import { SERVICE_IMAGE_DATA, ServiceCategories } from '@/constants/service-data'
import Link from 'next/link'
import { useState } from 'react'
import HeroSection from '../hero-section'

const Service = () => {
    const [selectedCategory, setSelectedCategory] = useState(ServiceCategories.ALL);

    // Step 2: Filter the services based on selected category
    // const filteredServices = SERVICE_DATA.filter((item) =>
    //     selectedCategory === ServiceCategories.ALL || item.type === selectedCategory
    // );

    // Step 3: Handle filter button clicks
    const handleCategoryClick = (category: ServiceCategories.ACADEMIC | ServiceCategories.ALL | ServiceCategories.BOOKS | ServiceCategories.SPORTS | ServiceCategories.TV_AND_FILM) => {
        setSelectedCategory(category);
    };

    const filteredData = SERVICE_IMAGE_DATA.filter(item =>
        selectedCategory === ServiceCategories.ALL || item.type === selectedCategory
    );

    return (
        <div>
            <HeroSection
                title="Portfolio &amp; Works"
                description="Explore My Words – Where Stories and Insights Come to Life"
                name="paddy Henderson"
            />
            {/* End Hero */}
            {/* Start Section*/}
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 items-center gap-6">
                        <div className="filters-group-wrap text-center">
                            <div className="filters-group">
                                <ul className="mb-0 list-none container-filter filter-options space-x-3 capitalize">

                                    <li className={`inline-block font-medium text-[18px] mb-4 text-slate-400 cursor-pointer relative duration-500  ${selectedCategory === ServiceCategories.ALL ? 'active' : ''} `}
                                        onClick={() => handleCategoryClick(ServiceCategories.ALL)}
                                    >{ServiceCategories.ALL}</li>
                                    <li className={`inline-block font-medium text-[18px] mb-4 text-slate-400 cursor-pointer relative duration-500 ${selectedCategory === ServiceCategories.BOOKS ? 'active' : ''} `}
                                        onClick={() => handleCategoryClick(ServiceCategories.BOOKS)}>
                                        {ServiceCategories.BOOKS}
                                    </li>
                                    <li className={`inline-block font-medium text-[18px] mb-4 text-slate-400 cursor-pointer relative duration-500 ${selectedCategory === ServiceCategories.ACADEMIC ? 'active' : ''} `}
                                        onClick={() => handleCategoryClick(ServiceCategories.ACADEMIC)}>
                                        {ServiceCategories.ACADEMIC}
                                    </li>
                                    <li className={`inline-block font-medium text-[18px] mb-4 text-slate-400 cursor-pointer relative duration-500 ${selectedCategory === ServiceCategories.SPORTS ? 'active' : ''} `}
                                        onClick={() => handleCategoryClick(ServiceCategories.SPORTS)}>
                                        {ServiceCategories.SPORTS}
                                    </li>
                                    <li className={`inline-block font-medium text-[18px] mb-4 text-slate-400 cursor-pointer relative duration-500 ${selectedCategory === ServiceCategories.TV_AND_FILM ? 'active' : ''} `}
                                        onClick={() => handleCategoryClick(ServiceCategories.TV_AND_FILM)}>
                                        {ServiceCategories.TV_AND_FILM}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>{/*grid*/}
                    <div id="grid" className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-center mx-auto mt-4">

                        {filteredData.map((item, index) => {
                            return (
                                <div className="w-full p-3 picture-item" key={index}>
                                    <div className="group relative block rounded-xl duration-700 ease-in-out">
                                        <div className="relative overflow-hidden rounded-xl">
                                            <div className="lightbox" >
                                                <ImageWrapper
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="rounded-xl h-64 "
                                                />
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>{/*end container*/}
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <span className="text-slate-400  mb-4">Get in Touch With Me</span>
                        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Contact me for writing, journalism, and more</h3>
                        <div className="mt-6">
                            <Link href="contact" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl"><i data-feather="phone" className="h-[15px] w-[15px] me-2" /> Contact us</Link>
                        </div>
                    </div>{/*end grid*/}
                </div>
            </section>
        </div>
    )
}

export default Service