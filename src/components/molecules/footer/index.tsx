import { memo } from 'react';
// import WHITE_LOGO from '@/assets/images/logo-white.png'
import WHITE_LOGO from "@/assets/images/logos/white-logo.jpeg";
import ImageWrapper from '@/components/atoms/image';

import LINKEDIN_IMAGE from '@/assets/images/social/linkedin.svg'
import INSTA_IMAGE from '@/assets/images/social/insta.svg';
import FB_IMAGE from '@/assets/images/social/facebook.svg';
import GITHUB_IMAGE from '@/assets/images/social/github.svg'
import MAIL_IMAGE from '@/assets/images/social/mail.svg'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 overflow-hidden">
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                        <div className="lg:col-span-3 md:text-start text-center">
                            <Link href="/" className="text-[22px] focus:outline-none">
                                <ImageWrapper
                                    src={WHITE_LOGO}
                                    alt={"team-6"}
                                    className='mx-auto md:me-auto md:ms-0 h-auto'
                                />
                            </Link>
                        </div>
                        <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                            <p className="mb-0 text-gray-400">©  Paddy Henderson. Design with <i className="mdi mdi-heart text-red-600" /> by <a href="/" target="_blank" className="text-reset">Mapreet singh</a>.</p>
                        </div>
                        <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
                            <li className="inline mr-2">
                                <Link href="http://facebook.com/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white">
                                    {/* <i data-feather="shopping-cart" className="h-[14px] w-[14px] align-middle" title="Buy Now" /> */}
                                    <ImageWrapper
                                        src={FB_IMAGE}
                                        alt={"facebook logo"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </Link>
                            </li>
                            <li className="inline mr-2">
                                <Link href="http://linkedin.com/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white">
                                    <ImageWrapper
                                        src={LINKEDIN_IMAGE}
                                        alt={"linkedin logo"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </Link>
                            </li>
                            <li className="inline mr-2">
                                <Link href="http://instagram.com/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white">
                                    <ImageWrapper
                                        src={INSTA_IMAGE}
                                        alt={"instagram logo"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </Link>
                            </li>
                            <li className="inline mr-2">
                                <Link href="https://www.github.com" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white">
                                    <ImageWrapper
                                        src={GITHUB_IMAGE}
                                        alt={"github"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </Link>
                            </li>
                            <li className="inline mr-2">
                                <Link href="https://www.gmail.com" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white">
                                    <ImageWrapper
                                        src={MAIL_IMAGE}
                                        alt={"mail"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </Link>
                            </li>
                            {/* <li className="inline">
                                <a href="https://x.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white">
                                    <ImageWrapper
                                        src={LINKEDIN_IMAGE}
                                        alt={"linkedin logo"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </a>
                            </li>
                            <li className="inline">
                                <a href="mailto:support@shreethemes.in" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white">
                                    <ImageWrapper
                                        src={LINKEDIN_IMAGE}
                                        alt={"linkedin logo"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </a>
                            </li>
                            <li className="inline">
                                <a href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white">
                                    <ImageWrapper
                                        src={LINKEDIN_IMAGE}
                                        alt={"linkedin logo"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </a>
                            </li> */}
                        </ul>{/*end icon*/}
                    </div>{/*end grid*/}
                </div>{/*end container*/}
            </div>
        </footer>
    )
}

export default memo(Footer)

