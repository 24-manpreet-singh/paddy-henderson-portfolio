import ImageWrapper from '@/components/atoms/image'
import { BLOG_DATA, BLOG_DATA_PROPS } from '@/constants/blog-data'
import { memo, useEffect, useState } from 'react'

type Props = {
    blogId: string
}

const BlogDetail = (props: Props) => {
    const { blogId } = props
    const [blogData, setBlogData] = useState<BLOG_DATA_PROPS | null>(null);

    useEffect(() => {
        if (blogId) {
            const matchedData = BLOG_DATA.find((item: BLOG_DATA_PROPS) => item.id === parseInt(blogId));
            setBlogData(matchedData || null)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blogId])

    return (
        <div>
            <section className="relative pt-40 md:pb-24 pb-16">
                <div className="container relative">
                    <div className="md:flex ">
                        <div className="lg:w-3/5">
                            <h5 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium">{blogData && blogData?.title || ''}</h5>
                            <p className="text-slate-400 dark:text-white/60 mt-4">{`Language is a window to who we are as people. Through the words we use and how we use them, people access a part of us, who we are.`}</p>
                            <div className="flex mt-5">
                                <span className="font-medium"><i className="mdi mdi-calendar-blank-outline me-2" />{blogData && blogData?.date || ''}</span>
                                <span className="ms-3 font-medium"><i className="mdi mdi-clock-outline me-2" />5 min read</span>
                            </div>
                            <div className="flex items-center mt-5">
                                {(blogData && blogData?.authorImageSrc) &&
                                    <ImageWrapper
                                        src={(blogData && blogData?.authorImageSrc) || ''}
                                        alt={'author'}
                                        className='h-12 w-12 rounded-xl'
                                    />
                                }
                                <div className="ms-2">
                                    <p className="font-medium block  text-orange-500">{blogData && blogData?.writer || ''}</p>
                                    <span className="text-slate-400 dark:text-white/60 text-sm block">Author</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-center mt-6">
                        <div className="lg:w-[500px]">
                            <div className="relative">
                                {(blogData && blogData?.imageSrc) &&
                                    <ImageWrapper
                                        src={(blogData && blogData?.imageSrc) || ''}
                                        alt={blogData && blogData?.imageAlt || ''}
                                        className='rounded-xl shadow-md dark:shadow-gray-800 '
                                    />
                                }

                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <a href="#!" data-type="youtube" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-500">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-center mt-6">
                        <div className="lg:w-4/5">
                            <p className="text-slate-400 dark:text-white/50 text-[16px]">
                                {blogData && blogData?.description || ''}
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default memo(BlogDetail)