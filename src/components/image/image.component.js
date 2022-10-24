import React from "react";
import styled from "styled-components/native";


const ImageContainer = styled.Image.attrs({
    resizeMode: "contain"
})`
    width: 80px;
`;

export const Image = ({ src }) => {
    return (
        <ImageContainer source={src} />
    );
};
