import styled from "styled-components";

export const SurroundingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  margin: 40px;
  padding: 40px;
  border: 2px solid ${(props) => props.theme.colors.bordersColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
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

export const Text = styled.p`
  font-size: 18px;
  background-color: #f3eed1;
  padding: 40px;
  margin: 20px 30px 0 0;
  border: 1px solid grey;
`;
