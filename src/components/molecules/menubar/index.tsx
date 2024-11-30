"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MENU_DATA } from './menu-item-data'

const MenubarWrapper = () => {
    const pathname = usePathname()
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const currentPath = pathname;
        const activeIndex = MENU_DATA.findIndex((item) => item.href === currentPath);
        setActiveIndex(activeIndex);
    }, [pathname]);


    return (
        <div className="text-right">
            <div className="portfolio-main-menu-wrap">
                <nav className="bastami-main-menu main_menu_3">
                    <ul>

                        {MENU_DATA.map((item, index: number) => (
                            <li
                                key={index}
                                className={activeIndex === index ? 'selected-menu active' : ''}

                            >
                                <Link href={item.href} onClick={() => setActiveIndex(index)} >
                                    <span>
                                        <i className={item.icon}></i>
                                    </span>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div >

    )
}

export default MenubarWrapper