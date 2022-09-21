import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 250px;

  @media (max-width: 1422px) {
    width: 100%;
    margin-left: 30px;
  }

  @media (max-width: 616px) {
    margin: 20px 120px
  }

  @media (max-width: 421px) {
    margin: 20px 40px
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.theme.grid.gridDisplay};
  width: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  gap: 40px;
  margin-right: 6.5%;

  @media (max-width: 613px) {
    margin-right: 50%;
  }

  @media (max-width: 420px) {
    margin-right: 10%;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
 
`;

export const PageButtons = styled.img`
  width: 100%;
  background-color: inherit;
  padding: 10px;
  border: 2px solid red;
  border-radius: 50%;
  cursor: pointer;
`;
