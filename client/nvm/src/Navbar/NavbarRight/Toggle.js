import React from "react";
import styled from "styled-components";
import { Toggle as Tog } from "react-toggle";
import {theme} from '../../utils/Theme'

function Toggle() {
  const [isactive, setisactive] = React.useState(false);
  return (
    <ToggleSwitch>
      {/* <Tog /> */}
      <Switch isactive={isactive} onClick={()=>setisactive(!isactive)}>
        <Slider isactive={isactive} />
      </Switch>
      <div>DarkMode</div>
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
  background-color:  ${({isactive})=>(isactive?theme.colors.green:theme.colors.gray)} ;
  border-radius: 28px;
  height: 28px;
  transition: background-color 0.2s ease-out;
  width: 54px;
  margin-right:0.25rem
`;

const Slider = styled.div`
  background-color: #fff;
  border-radius: 50%;
  height: 20px;
  margin-top: 4px;
  margin-left: 4px;
  transition: -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
  width: 20px;
  transform: ${({isactive})=> isactive?'translateX(26px)':'none'}
`;