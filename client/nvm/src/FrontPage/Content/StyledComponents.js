import styled from "styled-components";
import { theme } from "../../utils/Theme";
import { Link as LinkR } from "react-router-dom";
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  margin: 4rem;
`;
export const Container = styled.div`
  margin: 4rem 1rem;
  /* border:1px solid ${theme.colors.gray}; */
  /* background:#f1f9ff; */
  padding: 2rem;
  border-radius: 5px;
  /* box-shadow:1px 1px 5px gray; */
`;
export const ContentImage = styled.img`
  max-width: 500px;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Content = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0;
    align-items: center;
    text-align: center;
  }
  display: flex;
  padding-left: 100px;
  flex-direction: column;
  line-height: 1.2;

  div,
  h5,
  h6 {
    font-weight: 400;
    margin: 0;
    h4 {
      span {
        color: ${theme.colors.primary};
      }
    }
  }
`;

export const ContentInfo = styled.div`
  font-size: 24px;
  span {
    color: ${theme.colors.primary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: grid;
    align-items: center;
    justify-items: center;
    row-gap: 2rem;
  }
`;

export const ButtonBound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 1rem 2rem;
  cursor: pointer;
  color: #fff;
  /* background: ${theme.colors.brightgreen}; */
  background: #e37016;
  /* background: linear-gradient(#fea777,#e37016); */
  border-radius: 5px;
  /* :hover{
        background:#fff;
        color: ${theme.colors.primary};
    } */
`;

export const ImageButton = styled.image`
  background: transparent;
  width: 100px;
  height: 100%;
  object-fit: contain;
`;
export const RecentlyFarmButton = styled(LinkR)`
  width: 100px;
  border-radius: 5px;
  color: #fff;
  /* background:${theme.colors.brightgreen}; */
  background: linear-gradient(#fea777, #e37016);

  padding: 1rem 2rem;
  margin: auto;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;
export const ChartContainer = styled.div`
  /* background:${theme.colors.secondary}; */
  /* margin:4rem 1rem; */
  padding: 2rem;
  /* border-radius:1rem; */
  /* box-shadow:1px 1px 5px gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* h3{
    margin:2rem;
    padding:none;
} */

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const LauncherinputContainer = styled.div`
  display: flex;
  margin: 0 0.5rem;
`;
export const LauncherInput = styled.input`
  display: flex;
  padding: 0.5rem;
  /* border-radius:5px; */
  width: 100%;
  transition: 0.4s all ease-in-out;
  font-size: 1rem;
  border: none;
  overflow: auto;
  color: ${theme.colors.primary};
  background-color: transparent;
  /* border-color: #80bdff; */

  /* box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%); */

  height: 45px;
  border: none;
  width: 400px;
  max-width: 30vw;
  font-size: 16px;
  outline: none;
`;
export const SearchButton = styled(LinkR)`
  display: flex;
  background: transparent;
  text-decoration: none;
  /* color: ${theme.colors.primary}; */
  background: ${theme.colors.primary};
  color: #fff;

  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid transparent;

  transition: all 0.3s ease;
  margin-left: 0.5rem;
  width: 100px;
  padding: 0.5rem;
  :hover {
    color: black;
    background: white;
  }
  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;
export const SearchFrom = styled.form`
  display: flex;
  margin: 2rem auto;

  width: 575px;
  border-radius: 30px;
  max-width: 80vw;
  padding: 0.5rem 1rem;
  /* background:${theme.colors.lightPrimary}; */
  border: 1px solid ${theme.colors.lightPrimary};
  align-items: center;
  /* justify-content:flex-start; */

  /* justify-content:space-evenly; */
  :hover {
    box-shadow: 1px 1px 5px #dcdcdc;
  }
  :focus-within {
    box-shadow: 1px 1px 5px #dcdcdc;
    outline: none;
    @media screen and (max-width: 768px) {
      padding: 0.5rem;
    }
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem;
  justify-content: center;
`;
export const CardContainer = styled.div`
  margin: 1rem;
  display: grid;
  background: linear-gradient(
    135deg,
    rgba(225, 225, 225, 0.24),
    rgba(255, 207, 159, 0.7)
  );
  box-shadow: 1px 1px 5px rgba(255, 207, 159, 0.5);
  color: ${theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 10px;
  justify-items: center;
  align-items: center;
  row-gap: 1rem;
  cursor: default;
  :hover {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  .card-tittle {
    font-size: 1.25rem;
  }
`;
