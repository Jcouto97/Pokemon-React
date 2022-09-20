import styled from "styled-components";

export const Container = styled.div`
  /* border-bottom: {({colors}) => colors.secondaryColor}; ???? */
  background-color: ${props => props.theme.colors.primaryColor};
  display: flex;
  justify-content: space-around;
  gap: 800px;
  align-items: center;
  border-bottom: 2px solid red;
`;

export const Title = styled.h1`
  font-weight: 200;
  text-shadow: 1px 1px 2px white;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 36px;
`;

export const SearchBox = styled.p`
  padding: 10px;
`;

export const Dex = styled.p`
  color: red;
  font-weight: 600;
  background-color: white;
  border: 1px solid;
  border-radius: 10px;
  padding: 2px;
  font-size: 30px;
`;
