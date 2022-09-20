import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.bordersColor};
  border-radius: 10px;
  padding: 6px;
  background-color: #fff4bd;
  margin-top: 16px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: inherit;

  &::placeholder {
    color: black;
    font-size: 14px;
  }
`;

export const Glass = styled.img`
  max-width: 20px;
  max-height: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
`;
