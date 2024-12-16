"use client"
import WHITE_LOGO from "@/assets/images/logo-white.png"
import BLACK_LOGO from "@/assets/images/logos/black-logo.jpeg"
import ImageWrapper from '@/components/atoms/image'
import Link from 'next/link'
import LINKEDIN_IMAGE from '@/assets/images/social/linkedin.svg'
import INSTA_IMAGE from '@/assets/images/social/insta.svg'
import FB_IMAGE from '@/assets/images/social/facebook.svg'
import { memo, useState } from 'react'
import MobileMenuWrapper from '@/components/organisam/mobile-menu'


type HeaderWrapperProps = {
    onThemeChange?: () => void
}

const HeaderWrapper = (props: HeaderWrapperProps) => {
    const { onThemeChange } = props
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    // const context = useContext(Context);
    // const [openMenu, setOpenMenu] = useState<boolean>(false)
    // if (!context) {
    //     throw new Error('Context must be used within a ContextProvider');
    // }

    // const { incrementCount } = context;


    // const [isDarkMode, setIsDarkMode] = useState(true);

    // const toggleDarkMode = useCallback((selectedValue: boolean) => {
    //     const result = selectedValue === true ? false : true
    //     incrementCount(result)

    //     onThemeChange();
    //     setIsDarkMode((prevState) => !prevState);
    // }, [onThemeChange]);

    // const onOpenMenu = () => {
    //     setOpenMenu(!openMenu)
    // }

    const onOpenMenu = () => {
        const flag = !openMenu;
        setOpenMenu(flag)
    }

    return (
        <>
            {onThemeChange && ''}
            <nav id="topnav" className="defaultscroll is-sticky bg-white">
                <div className="container relative flex items-center justify-between">
                    {/* Logo container */}
                    {/* <a className="logo flex items-center" href="index.html"> */}
                    <Link href={'/'} className="logo flex items-center">
                        <ImageWrapper
                            src={BLACK_LOGO}
                            alt={"dark logo"}
                            className='-5 inline-block '
                        />
                        <ImageWrapper
                            src={WHITE_LOGO}
                            alt={"white logo"}
                            className='-h-5 hidden '
                        />
                    </Link>


                    {/* Navigation Menu */}
                    <div id="navigation">
                        <ul className="navigation-menu justify-end flex space-x-6">


                            <li>
                                <Link href={'/'} className="sub-menu-item">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about-us'} className="sub-menu-item">
                                    About Us</Link>
                            </li>
                            <li>
                                <Link href={'/service'} className="sub-menu-item">
                                    Services
                                </Link>
                            </li>
                            {/* <li className="has-submenu parent-parent-menu-item">
                                <a href="javascript:void(0)">Portfolio</a><span className="menu-arrow" />
                                <ul className="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Modern Portfolio</li>
                                            <li><a href="portfolio-modern-two.html" className="sub-menu-item">Two Column</a></li>
                                            <li><a href="portfolio-modern-three.html" className="sub-menu-item">Three Column</a></li>
                                            <li><a href="portfolio-modern-four.html" className="sub-menu-item">Four Column</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
                            <li>
                                <Link href={'/blog'} className="sub-menu-item">
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link href={'/contact'} className="sub-menu-item">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {openMenu &&
                        <div className="absolute  w-72 min-h-[180px] list-main-wrapper rounded bg-white overflow-hidden lg:hidden top-14 right-0">
                            <MobileMenuWrapper onOpenMenu={onOpenMenu} />
                        </div>
                    }
                    <div className="menu-extras flex items-center space-x-4">
                        {/* Toggle menu */}
                        <div className="menu-item">
                            <a className="navbar-toggle" id="isToggle" onClick={() => onOpenMenu()} >
                                <div className="lines">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </a>
                        </div>




                        {/* Social Icons */}
                        <ul className="buy-button list-none mb-0 flex space-x-4">
                            <li>
                                <a href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white">
                                    <ImageWrapper
                                        src={FB_IMAGE}
                                        alt={"linkedin logo"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white">
                                    {/* <i data-feather="linkedin" className="h-[14px] w-[14px] align-middle" title="linkedin" /> */}
                                    <ImageWrapper
                                        src={LINKEDIN_IMAGE}
                                        alt={"linkedin logo"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white">
                                    <ImageWrapper
                                        src={INSTA_IMAGE}
                                        alt={"linkedin logo"}
                                        className='h-[14px] w-[14px] align-middle text-white'
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default memo(HeaderWrapper)