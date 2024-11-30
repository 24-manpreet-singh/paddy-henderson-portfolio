import React, { createContext, useState } from 'react';

interface ContextData {
    isDark: boolean;
    incrementCount: (themeValue: boolean) => void;
}

const Context = createContext<ContextData | null>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const incrementCount = (themeValue: boolean) => {
        setIsDarkTheme(themeValue);
    };

    const value = { isDark: isDarkTheme, incrementCount };

    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    );
};

export { Context, ContextProvider };
