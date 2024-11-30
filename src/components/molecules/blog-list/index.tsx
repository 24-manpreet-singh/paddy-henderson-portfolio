import React from 'react';
import ImageWrapper from '@/components/atoms/image';
import { BLOG_DATA } from '@/constants/blog-data';
import Link from 'next/link';

type BlogListProps = {
    title: string,
    description: string
}

const BlogList = (props: BlogListProps) => {
    const { title, description } = props

    const truncateText = (text: string, limit = 120) => {
        if (!text) return ''; // Return an empty string if no text is provided
        return text.length > limit ? text.slice(0, limit) + '...' : text;
    };

    return (
        <React.Fragment>


            <div className={`container relative ${title ? 'md:mt-24 mt-16' : "md:mt-0 mt-8"}`}>
                {(title && description) && <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">{title}</h3>
                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
                        {description}
                    </p>
                </div>
                }
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">



                    {BLOG_DATA.map((item, index: number) => {
                        return (
                            <div className="group" key={index}>
                                <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
                                    <div className='h-72'>
                                        <ImageWrapper
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className='object-contain'
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500" />
                                    <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                                        <ImageWrapper
                                            src={item.authorImageSrc}
                                            alt={item.authorImageAlt}
                                            className='h-9 w-9 rounded-xl'
                                        />
                                        <div className="ms-2">
                                            <p className="text-white hover:text-orange-500 text-[15px]">{item.writer}</p>
                                            <p className="text-white/70 text-sm">{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <Link href={`blog/detail/${item.id}`} className="title text-lg font-medium hover:text-orange-500 duration-500">{item.title}</Link>
                                    <p className="text-slate-400 dark:text-white/60 mt-3">
                                        {truncateText(item.description)}
                                    </p>
                                    <div className="mt-3">
                                        <Link href={`blog/detail/${item.id}`} className="hover:text-orange-500">Read More <i className="mdi mdi-arrow-right align-middle" /></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </React.Fragment>
    )
}

export default BlogList