import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 250px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.grid.gridDisplay};
  gap: 10px 10px;
  width: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  gap: 40px;
 
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
`;

export const IconImage = styled.img`
  width: 100%;
  background-color: red;
  padding: 10px;
  border: 4px solid #b1ad9b;
  border-radius: 50%;
  cursor: pointer;
`;

//