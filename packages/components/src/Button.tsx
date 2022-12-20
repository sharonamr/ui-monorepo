import { FC } from "react";
import styled from 'styled-components/macro';

const DEFAULT_COLOR = "#5e95ff";

export const StyledButton = styled.button<{backgroundColor: string}>`
  padding: 10px;
  border: 0;
  border-radius: 15px;
  background-color: ${({ backgroundColor = DEFAULT_COLOR }) => backgroundColor};
`;

export const Button: FC<{ label: string, backgroundColor: string }> = ({backgroundColor, label}) => {
    return <StyledButton backgroundColor={backgroundColor}>{label}</StyledButton>;
}