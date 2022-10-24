import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AudioQuranContextProvider } from "../services/audio-quran/audio-quran.context";
import { TranslationContextProvider } from "../services/translation/translation.context";
import { HomeScreen } from "../features/home/screens/home.screen";
import { TranslationScreen } from "../features/translation/screens/translation.screen";
import { TranslationSurahScreen } from "../features/translation/screens/translation-surah.screen";
import { AudioQuranScreen } from "../features/quran/screens/audio-quran.screen";
import { AudioSurahScreen } from "../features/quran/screens/audio-surah.screen";


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <AudioQuranContextProvider>
            <TranslationContextProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="HomeScreen" component={HomeScreen} />
                        <Stack.Screen name="Translation" component={TranslationScreen} />
                        <Stack.Screen name="TranslationSurah" component={TranslationSurahScreen} />
                        <Stack.Screen name="AudioQuran" component={AudioQuranScreen} />
                        <Stack.Screen name="AudioSurah" component={AudioSurahScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </TranslationContextProvider>
        </AudioQuranContextProvider>
    );
};
