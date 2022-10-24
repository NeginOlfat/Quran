import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Header } from "../../../components/header/header.component";
import { AudioQuranContext } from "../../../services/audio-quran/audio-quran.context";
import { AyahsList } from "../../../components/list/ayahs-list.component";
import { color } from "../../../utils/color";


const IndicatorContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items:center;
`;

export const AudioSurahScreen = ({ navigation, route }) => {

    const number = route.params.surah.number;
    const title = route.params.surah.name;

    const { ayahs, isLoading, setNumber } = useContext(AudioQuranContext)

    useEffect(() => {
        setNumber(number);
    }, [])

    return (
        <SafeArea>
            <Header text={title} isArabic />
            {
                !isLoading ?
                    (
                        <AyahsList
                            ayahs={ayahs}
                            isArabic
                        />
                    ) : (
                        <IndicatorContainer>
                            <ActivityIndicator animating={true} color={color.blue} size="large" />
                        </IndicatorContainer>
                    )
            }
        </SafeArea>
    );
};
