import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

import { Header } from "../../../components/header/header.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/utility/spacer.component";
import { TranslationContext } from "../../../services/translation/translation.context";
import { color } from "../../../utils/color";
import { QuranList } from "../../../components/list/quran-list.component";



const PickerContainer = styled.View`
    align-items: center;
`;

const PickerLanguage = styled(Picker)`
    height: 50px;
    width: 90%; 
    backgroundColor: ${color.white};
`;

const IndicatorContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items:center;
`;


export const TranslationScreen = ({ navigation }) => {

    const { surahs, isLoading, setIsLoading, setLanguage, language } = useContext(TranslationContext);

    const [languagePicker, setLanguagePicker] = useState(language);

    const onPickerChange = (value) => {
        setIsLoading(true);
        setLanguagePicker(value);
    }

    useEffect(() => {
        setLanguage(languagePicker);
    }, [languagePicker]);

    return (
        <SafeArea>
            <Header text="Translation" />
            <Spacer size="large" />

            <PickerContainer>
                <PickerLanguage
                    selectedValue={languagePicker}
                    onValueChange={(itemValue, itemIndex) => onPickerChange(itemValue)}
                >
                    <Picker.Item label="English" value="en.ahmedali" />
                    <Picker.Item label="Kurdish / کوردی" value="ku.asan" />
                    <Picker.Item label="Persian / فارسی" value="fa.makarem" />
                </PickerLanguage>
            </PickerContainer>
            <Spacer size="large" />

            {
                isLoading ?
                    (
                        <IndicatorContainer>
                            <ActivityIndicator animating={true} color={color.blue} size="large" />
                        </IndicatorContainer>
                    ) : (
                        <QuranList
                            surahs={surahs}
                            onNavigation={navigation.navigate}
                            screen="TranslationSurah"
                        />
                    )
            }
        </SafeArea>
    );
};
