import styled from "styled-components";

export const SurroundingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 965px) {
    flex-wrap: wrap;
    gap: 1%;
    padding: 10px;
  }
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
  width: 60%;
`;

export const Image = styled.img`
  min-width: 120px;
  background-color: aliceblue;
  border: 1px solid black;

  @media (max-width: 850px) {
    width: 100%;
  }
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
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 850px) {
    height: 20%;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: aliceblue;
  border-radius: 20px;
  border: 1px solid red;
`;

export const Title = styled.h5`
  text-decoration: underline;
  margin: 10px;
`;

export const Ability = styled.p`
  font-size: 16px;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f3eed1;
  padding: 20px;
  margin: 20px 30px 0 0;
  border: 1px solid grey;

  @media (max-width: 965px) {
    width: 80%;
  }

  @media (max-width: 850px) {
    width: 100%;
    margin-left: 30px;
  }
`;

//testing test