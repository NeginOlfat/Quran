import React from "react";
import styled from "styled-components/native";
import { Divider } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";

import { Text } from "../typography/text.component";
import { Spacer } from "../utility/spacer.component";


const Container = styled.View`
    padding-horizontal: 6%;
`;

export const QuranList = ({ surahs, screen, onNavigation }) => {

    return (
        <FlatList
            data={surahs}
            renderItem={({ item }) => {
                return (
                    <>
                        <Divider />
                        <Spacer size="large" />
                        <Container>
                            <TouchableOpacity
                                onPress={() => onNavigation(screen, { surah: item })}
                            >
                                <Text variant="ArabicCaption">{item.name}</Text>
                            </TouchableOpacity>
                        </Container>
                        <Spacer size="large" />
                    </>
                );
            }}
            keyExtractor={(item) => item.englishName}
        />
    );
};
