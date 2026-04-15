import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "./translations";

interface LanguageContextProps {
    language: Language;
    toggleLanguage: () => void;
    t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("EN");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "EN" ? "CEB" : "EN"));
    };

    const t = (text: string): string => {
        if (language === "EN") return text;
        return translations[text] || text;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
