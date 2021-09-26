import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../utils/Theme";

export const NavLinks = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  justify-content:space-around;
  justify-items:start;
  align-items: center;
  a {
    /* width:100%;
        color:${({ Darkmode }) =>
      Darkmode ? theme.colors.primary : theme.colors.black};
        color:${theme.colors.white};
        font-weight:bold;
        font-size:2rem; */
    text-align:start;
    font-size: 1.5rem;
    /* font-weight: 500; */
    text-decoration: none;
    background: linear-gradient(to right, #fff 50%, #ff8723 50%, #cc2e5d);
    background-size: 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.5s ease-out;
    color: #fff;
    :hover {
      background-position: -100%;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavDiscord = styled.a`
  text-decoration: none;
  padding: 0.5rem;
  text-align: center;
  margin:0;
  color:white;

`;
export const NavLink = styled(LinkR)`
  /* text-decoration:none;
    padding:0.5rem;
    text-align:center; */

  /* font-size: 60px; */
  color:white;
  padding: 0.5rem;
  text-decoration: none;
  transition: 0.5s ease all;
  
  :hover {
    /* background-position: -100%; */
    background: rgba(0,0,0,0.1);
  }
`;

export const NavDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
