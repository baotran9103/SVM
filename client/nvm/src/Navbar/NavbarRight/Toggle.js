import React from "react";
import styled from "styled-components";
import { Toggle as Tog } from "react-toggle";
import {theme} from '../../utils/Theme'
import {useSelector} from 'react-redux'
import {ChangethemeEvent} from '../../Functions/UtilsFunctions'

function Toggle() {
  const [isactive, setisactive] = React.useState(false);
  const Darkmode = useSelector(state => state.Utils.Darkmode)
  return (
    <ToggleSwitch>
      {/* <Tog /> */}
      <Switch isactive={Darkmode} onClick={()=>ChangethemeEvent(!Darkmode)}>
       
        <Slider isactive={Darkmode} >{Darkmode?<Sun/>:<Moon/>} </Slider>
  

       
      </Switch>
    </ToggleSwitch>
  );
}

export default Toggle;

const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin:0 0.5rem;
`;
const Switch = styled.div`
  background-color:  ${({isactive})=>(isactive?theme.colors.primary:theme.colors.gray)} ;
  border-radius: 28px;
  height: 28px;
  transition: background-color 0.2s ease-out;
  width: 54px;
  /* width:100%; */
  margin:  0.25rem;
  padding:3px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  /* padding:0.25rem 1rem; */

`;

const Slider = styled.div`
  background-color: #fff;
  color:black;
  border-radius: 50%;
  height: 20px;
  /* margin-top: 4px; */
  margin-left: 2px;
  /* margin:4px; */
  transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
  width: 20px;
  
  padding:0.1rem; 
  transform: ${({isactive})=> isactive?'translateX(26px)':'none'};
 
`;

const Moon = ()=>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>
  )
  }
const Sun = ()=>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
  )
  }