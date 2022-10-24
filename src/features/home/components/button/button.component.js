import React from "react";
import styled from "styled-components/native";

import { Image } from "../../../../components/image/image.component";
import { Text } from "../../../../components/typography/text.component";
import { color } from "../../../../utils/color";


const Container = styled.TouchableOpacity`
    background-color: ${color.blue};
    flex-direction: row;
    width: 80%;
    height: 100px;
    border-radius: 8px;
    justify-content: space-around;
    align-items: center;
    padding-horizontal: 4%;
`;

export const Button = ({ title, icon, onPress }) => {
    return (
        <Container
            onPress={onPress}
        >
            <Image src={icon} />
            <Text variant="label">{title}</Text>
        </Container>
    );
};
