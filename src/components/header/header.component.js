import React from "react";
import styled from "styled-components/native";

import { Image } from "../image/image.component";
import { Text } from "../typography/text.component";


const Container = styled.View`
    background-color: #105278;
    flex-direction: row;
    width: 100%;
    height: 90px;
    justify-content: space-around;
    align-items: center;
`;

export const Header = ({ text, isArabic }) => {
    return (
        <Container>
            <Image src={require("../../../assets/quran.png")} />
            <Text variant={isArabic ? "ArabicHeader" : "header"}>{text}</Text>
        </Container>
    );
};
