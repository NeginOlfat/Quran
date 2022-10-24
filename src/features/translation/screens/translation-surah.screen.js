import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Header } from "../../../components/header/header.component";
import { AyahsList } from "../../../components/list/ayahs-list.component";

export const TranslationSurahScreen = ({ navigation, route }) => {

    const { surah } = route.params

    return (
        <SafeArea>
            <Header text={surah.name} isArabic />
            <AyahsList ayahs={surah.ayahs} />
        </SafeArea>
    );
};
