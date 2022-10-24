import styled from "styled-components/native";
import { color } from "../../utils/color";

const header = () => `
    color: ${color.yellow};
    font-size: 25px;
`;

const ArabicHeader = () => `
    color: ${color.yellow};
    font-size: 25px;
    font-family: Amiri_700Bold_Italic;
`;

const label = () => `
    color: ${color.white};
    font-size: 26px;
`;

const caption = () => `
    color: ${color.blue};
    font-size: 25px;
`;

const ArabicCaption = () => `
    color: ${color.blue};
    font-size: 25px;
    font-family: Amiri_400Regular;
`;

const variants = {
    header,
    label,
    caption,
    ArabicCaption,
    ArabicHeader
}

export const Text = styled.Text`
    ${({ variant }) => variants[variant]};
`;
