"use client"
import Footer from '@/components/molecules/footer';
import Header from '@/components/molecules/header';
import { ContextProvider } from '@/store/provider';
import React from 'react';


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const [isDarkTheme, setDarkTheme] = useState(true);

    // const onThemeChange = useCallback(() => {
    //     setDarkTheme((prevState) => !prevState);
    // }, []);

    return (
        <ContextProvider>
            {/* <div className={` ${isDarkTheme ? 'light' : 'light'}`}> */}
            <div>
                <Header />
                {children}
                {/* Business Partner */}
                {/* Start Footer */}
                <Footer />
                {/* 
                <a href="#" id="back-to-top" className="back-to-top fixed hidden text-lg rounded-xl z-10 bottom-5 end-5 h-8 w-8 text-center bg-orange-500 hover:bg-orange-600 text-white leading-9 justify-center items-center duration-500">
                    <i data-feather="arrow-up" className="h-[14px] w-[14px] stroke-[3]" />
                </a>
                <div className="fixed top-1/4 -right-2 z-3">
                    <span className="relative inline-block rotate-90">
                        <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
                        <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
                            <i data-feather="moon" className="h-[18px] w-[18px] text-yellow-500" />
                            <i data-feather="sun" className="h-[18px] w-[18px] text-yellow-500" />
                            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7" />
                        </label>
                    </span>
                </div> */}
            </div>
        </ContextProvider>
    )
}
