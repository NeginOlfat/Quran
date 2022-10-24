import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Header } from "../../../components/header/header.component";
import { Spacer } from "../../../components/utility/spacer.component";
import { Button } from "../components/button/button.component";
import { Text } from "../../../components/typography/text.component";
import { color } from "../../../utils/color";

const Container = styled.View`
  flex-direction: row;
  background-color: ${color.white};
  border-color: ${color.blue};
  border-radius: 8px;
  border-width: 2px;
  margin: 8px;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
`;

const Image = styled.Image`
  width: 150px;
`;

const Menu = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HomeScreen = ({ navigation }) => {
    return (
        <SafeArea>
            <Header text="Quran" />
            <Spacer size="xl" />
            <Container>
                <Image
                    source={require("../../../../assets/quran-home.png")}
                    resizeMode="contain"
                />
                <View>
                    <Text variant="caption">Surah: 114</Text>
                    <Spacer />
                    <Text variant="caption">Ayah: 6,666</Text>
                    <Spacer />
                    <Text variant="caption">Sajdah: 14</Text>
                </View>
            </Container>
            <Menu>
                <Button
                    title="Audio"
                    icon={require("../../../../assets/audio.png")}
                    onPress={() => navigation.navigate("AudioQuran")}
                />
                <Spacer size="xl" />
                <Button
                    title="Translation"
                    icon={require("../../../../assets/translation.png")}
                    onPress={() => navigation.navigate("Translation")}
                />
            </Menu>
        </SafeArea>
    );
};
