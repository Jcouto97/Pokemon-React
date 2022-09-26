import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primaryColor};
  display: flex;
  justify-content: space-around;
  gap: 20%;
  align-items: center;
  border-bottom: 2px solid red;

  @media (max-width: 471px){
    flex-wrap: wrap;
    gap: 1%;
    padding: 10px;
    }
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

