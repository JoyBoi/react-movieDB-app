import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
