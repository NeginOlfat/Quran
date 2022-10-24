import React, { useState, useEffect, createContext } from "react";
import { fetchAudioQuran, AudioQuranTransform } from "./audio-quran.sevice";

export const AudioQuranContext = createContext();

export const AudioQuranContextProvider = ({ children }) => {

    const [number, setNumber] = useState(1);
    const [ayahs, setAyahs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchData = (num) => {
        setIsLoading(true);
        fetchAudioQuran(num)
            .then(AudioQuranTransform)
            .then((res) => {
                setAyahs(res);
                setIsLoading(false);
            }).catch((er) => {
                console.log(er);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchData(number);
    }, [number])

    return (
        <AudioQuranContext.Provider
            value={{
                ayahs,
                isLoading,
                setIsLoading,
                setNumber
            }}
        >
            {children}
        </AudioQuranContext.Provider>
    );
};
