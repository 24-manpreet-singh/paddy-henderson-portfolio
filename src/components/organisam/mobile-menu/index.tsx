import { MENU_DATA } from '@/components/molecules/menubar/menu-item-data';
import { Context } from '@/store/provider';
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from "react";

type MobileMenuWrapperProps = {
    onOpenMenu: () => void;
}

export default function MobileMenuWrapper(props: MobileMenuWrapperProps) {
    const { onOpenMenu } = props;
    const pathname = usePathname()
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const context = useContext(Context);
    if (!context) {
        throw new Error('Context must be used within a ContextProvider');
    }

    useEffect(() => {
        const currentPath = pathname;
        const activeIndex = MENU_DATA.findIndex((item) => item.href === currentPath);
        setActiveIndex(activeIndex);
    }, [pathname]);


    const parentVariant = {
        hidden: {
            y: "-100px",
            opacity: 0.5,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1,
                // duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }

    const childVariant = {
        hidden: {
            y: 20,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
            },

        }
    };

    return (
        <div className="relative">
            {/* Menu Section */}
            {true && (
                <motion.div
                    variants={parentVariant}
                    animate="visible"
                    initial="hidden"
                    className={`absolute top-0 left-0 w-full mobile-menu-wrapper z-50 `}>
                    <ul className="py-2">
                        {MENU_DATA.map((item, index) => (
                            <Link href={item.href} key={index} onClick={() => {
                                onOpenMenu();
                                setActiveIndex(index)

                            }}
                                className="" >
                                <motion.li
                                    variants={childVariant}
                                    key={index}
                                    className={`flex items-center mb-2 text-[#445b75] capitalize py-[7px] px-4 cursor-pointer hover:bg-[#e8356a] text-sm font-medium hover:text-white ${activeIndex === index ? 'active' : ''}`}
                                >
                                    <span className="mr-2 min-w-[20px] ">
                                        <i className={item.icon}></i>
                                    </span>
                                    {item.label}
                                </motion.li>
                            </Link>
                        ))}
                    </ul>
                </motion.div>
            )
            }

        </div >
    );
}
