import React, { useState, useEffect, createContext } from "react";
import { fetchTranslation, translationTransform } from "./translation.service";

export const TranslationContext = createContext();

export const TranslationContextProvider = ({ children }) => {

    const [language, setLanguage] = useState("en.ahmedali");
    const [surahs, setSurahs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchData = (lang) => {

        fetchTranslation(lang)
            .then(translationTransform)
            .then((res) => {
                setSurahs(res);
                setIsLoading(false);
            }).catch((er) => {
                console.log(er);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchData(language)
    }, [language])

    return (
        <TranslationContext.Provider
            value={{
                surahs,
                language,
                setLanguage,
                isLoading,
                setIsLoading
            }}
        >
            {children}
        </TranslationContext.Provider>
    )
}