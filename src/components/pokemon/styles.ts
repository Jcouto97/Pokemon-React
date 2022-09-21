import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  margin: 20px;
  max-width: 200px;
  padding: 40px;
  border: 2px solid ${(props) => props.theme.colors.bordersColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  cursor: pointer;
`;

export const Image = styled.img`
  min-width: 120px;
  background-color: aliceblue;
  border: 1px solid black;
`;

export const ID = styled.p`
  font-style: italic;
  text-decoration: underline;
  color: red;
  font-size: 18px;
`;

export const Name = styled.h3`
  font-size: 18px;
  text-transform: uppercase;
`;
