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
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
export const Content = styled.div`
  letter-spacing:1.5px;
  font-weight:semi-bold;
  text-transform: capitalize;
  .logo{
    margin-left:2rem;
    font-size:4rem;
    font-weight:bold;
    background: linear-gradient(-45deg, #ff8723 25%, #cc2e5d 15%, #ff8723);
    background-size: 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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
  font-family:arial, sans-serif;
  letter-spacing:1.5px;
  box-shadow: inset 0 -5px 5px rgba(0,0,0,0.1),
              0 5px 10px rgba(0,0,0,0.1),
              0 10px 15px rgba(0,0,0,0.1);
  background: #e37016;
  /* background: linear-gradient(#fea777,#e37016); */
  border-radius: 20px;
  transition:0.5s ease all;
  :hover {
    transform:scale(1.08);
    color:#fff;
  }
  :active {
    transform:scale(1);
    color:${theme.colors.primary};
    background:white;
    box-shadow: inset 0 -7px 5px rgba(0,0,0,0.02),
                inset 0 5px 10px rgba(0,0,0,0.15) ;
  }
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
  width: 100%;
  @media screen and (max-width: 320px){
    margin: 0 0.2rem;
  }
`;
export const LauncherInput = styled.input`
  display: flex;
  /* padding: 0.5rem; */
  /* border-radius:5px; */
  width: 100%;
  transition: 0.4s all ease-in-out;
  font-size: 1.1rem;
  border: none;
  overflow: auto;
  color: ${theme.colors.primary};
  background-color: transparent;
  /* border-color: #80bdff; */

  /* box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%); */

  height: 45px;
  border: none;
  width: 100%;
  /* max-width: 30vw; */
  outline: none;
`;
export const SearchButton = styled(LinkR)`
  display: flex;
  background: transparent;
  text-decoration: none;
  /* color: ${theme.colors.primary}; */
  background: ${theme.colors.white};
  color: #777;
  /* box-shadow: 1px 1px 5px hsla(240,60%,86%,1); */
  box-shadow: inset 0 -5px 5px rgba(0,0,0,0.1),
              0 5px 10px rgba(0,0,0,0.1),
              0 10px 15px rgba(0,0,0,0.1);

  font-family:arial, sans-serif;
  letter-spacing:1.5px;
  /* background: ${theme.colors.white};
  color: ${theme.colors.black};
  box-shadow: 4px 4px 5px hsla(240,8%,20%,1),
  inset 4px 4px 5px hsla(240, 8%, 20%, 1)
  ;  */

  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid transparent;

  transition: all 0.3s ease;
  /* margin-left: 2rem; */
  margin:0.25rem 0 ;
  margin-right: 0.5rem;
  width: 100px;
  padding: 0.25rem 2rem;
  :hover {
    transform:scale(1.08);
    color:${theme.colors.primary};
  }
  :active {
    transform:scale(1);
    /* color:${theme.colors.primary}; */
    background:white;
    box-shadow: inset 0 -7px 5px rgba(0,0,0,0.02),
                inset 0 5px 10px rgba(0,0,0,0.15) ;
  }
  @media screen and (max-width: 768px) {
    width: 50px;
  padding: 0.5rem 1rem;

  margin-left: 1rem;
  margin-right: 0;

  }
  @media screen and (min-width:375px){
  margin-left: 2rem;


  }
`;
export const SearchFrom = styled.form`
  display: grid;
  margin: 2rem 1rem;
   grid-template-columns:1fr 20fr;
  /* width: 575px; */
  border-radius: 30px;
  /* max-width: 80vw; */
  padding: 0.5rem 1rem;
  /* background:${theme.colors.lightPrimary}; */
  /* border: 0.5px solid ${theme.colors.gray}; */
  background:white;
 
            ;
   box-shadow: ${({Darkmode})=>Darkmode?`-4px -4px 5px black, 4px 4px 8px hsla(240, 8%, 12%, 1), 
              inset 4px 4px 8px gray, 
              inset -4px -4px 8px gray
            ;`: `  -10px -10px 15px #fff,
                10px 10px 15px rgba(0,0,0,0.1),
                inset -5px -5px 15px #fff,
                inset 5px 5px 15px rgba(0,0,0,0.1)

                ;
            ;`} ;

   
            
            color:#777;
  align-items: center;
  @media screen and (min-width:1080px){
    max-width: 50vw;
    /* align-self: center; */
    margin:auto;
  }
  /* justify-content:flex-start; */

  /* justify-content:space-evenly; */
  :hover {
    /* box-shadow: 1px 1px 5px #dcdcdc; */
  }
  :focus-within {
    /* box-shadow: 1px 1px 5px #dcdcdc; */
    outline: none;
    @media screen and (max-width: 768px) {
      padding: 0.5rem;
    }
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 2rem 0;
  width: 100%;
  justify-content: center;
  position: relative;
 

    

    .line {
      position: absolute;
      top:50%;
      left:15%;
      width: 70%;
      height:4px;
      border:1px solid #ff8723; 
      background:linear-gradient(to right, #ffcf9f 50%, #ff8723 50%, #cc2e5d);
      background-size: 200%;
      animation: run  2s infinite;
    }
    @keyframes run {
    0% {
      background-position:-100%;
    }
    50% {
      background-position:100%;

    }
    100% {
      background-position:0%;

    }
  }

  
  .card{
    z-index:2
  }
`;
export const CardContainer = styled.div`
h4{
  margin:0;
   background: linear-gradient(to right, #ff8723 50%, #ff8723 50%, #cc2e5d);
  
  transition:all 0.4s ease;
  background-size: 200%;
  -webkit-background-clip: text;
  
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family:arial, sans-serif;
  letter-spacing:0.5px;
  :hover {
    /* margin-top: 0;
    margin-bottom: 2rem; */
    background-position: 100%;
   
  }
}
  margin:  2.5rem;
  display: grid;
    text-align: center;
  z-index:20;
 
  width: 120px;
  box-shadow: 1px 1px 5px rgba(255, 207, 159, 0.5);
  color: ${theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 10px;
  justify-items: center;
  align-items: center;
  row-gap: 1rem;
  cursor: default;
  transition:all 0.4s ease;
  /* background: linear-gradient(to right, #ff8723 50%, #ff8723 50%, #cc2e5d); */
  
  box-shadow:  ${({Darkmode})=> Darkmode? `inset  0 5px 5px rgba(255,135,35,0.1),  
                                            0 5px 5px rgba(255,135,35,0.1),
                                            0 10px 15px rgba(255,135,35,0.1);` 
                                            
                                            : `inset  0 -5px 5px rgba(0,0,0,0.1),
  
                                              0 5px 17px rgba(0,0,0,0.1),
                                              0 10px 15px rgba(0,0,0,0.1);`}     ;

  font-family:arial, sans-serif;
  letter-spacing:0.5px;
  :hover {
    /* margin-top: 0;
    margin-bottom: 2rem; */
    background-position: 100%;
    box-shadow:       5px 5px 10x rgba(255,135,35,1),
    -5px -10px 15px rgba(255,135,35,1);
    transform:scale(1.01)
  }
  .card-tittle {
    font-size: 1.25rem;
  }
  
`;
