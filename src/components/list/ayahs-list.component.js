import React from "react";
import { TouchableOpacity } from "react-native";
import { Audio } from "expo";
import styled from "styled-components/native";
import { Divider } from "react-native-paper";
import { FlatList } from "react-native";

import { Text } from "../typography/text.component";
import { Spacer } from "../utility/spacer.component";


const Container = styled.View`
    padding-horizontal: 6%;
`;

const playSound = async (url) => {
    console.log(url)
    try {
        const soundObject = new Audio.Sound();
        await soundObject.loadAsync({ uri: url });
        await soundObject.setVolumeAsync(0.8)
        await soundObject.setIsLoopingAsync(true)
        await soundObject.playAsync()
    } catch (error) {
        console.log(error)

    }
}

export const AyahsList = ({ ayahs, isArabic }) => {
    return (
        <>
            <FlatList
                data={ayahs}
                renderItem={({ item }) => {
                    return (
                        <>
                            <Divider />
                            <Spacer size="large" />
                            <Container>
                                {isArabic ?
                                    (
                                        <TouchableOpacity
                                            onPress={() => playSound(item.audio)}
                                        >
                                            <Text variant="ArabicCaption">{item.text}</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <Text variant="caption">{item.text}</Text>
                                    )
                                }

                            </Container>
                            <Spacer size="large" />
                        </>
                    );
                }}
                keyExtractor={(item) => item.number}
            />

        </>
    );
};