import React from "react";
import styled from "styled-components/native";

const sizeVariant = {
    small: 4,
    medium: 8,
    large: 16,
    xl: 32,
    xxl: 64
};

const positionVariant = {
    top: "margin-top",
    left: "margin-left",
    right: "margin-right",
    bottom: "margin-bottom"
}

const SpaceView = styled.View`
    ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
    const property = positionVariant[position];
    const value = sizeVariant[size];
    const variant = `${property}:${value}px`;
    return <SpaceView variant={variant} >{children}</SpaceView>
};

Spacer.defaultProps = {
    position: "top",
    size: "small"
};
