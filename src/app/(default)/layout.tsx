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

            </div>
        </ContextProvider>
    )
}
