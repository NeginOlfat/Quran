import React, { useEffect } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Header } from "../../../components/header/header.component";
import { QuranList } from "../../../components/list/quran-list.component";
import { QuranSurahs } from "../../../services/quran-surah.data";


export const AudioQuranScreen = ({ navigation }) => {

    return (
        <SafeArea>
            <Header text="Audio" />
            <QuranList
                surahs={QuranSurahs}
                screen="AudioSurah"
                onNavigation={navigation.navigate}
            />
        </SafeArea>
    );
};
