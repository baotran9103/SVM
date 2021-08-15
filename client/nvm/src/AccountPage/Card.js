import React,{useState} from "react";
import ToolTip from "./ToolTip";
import styled from "styled-components";
import { theme } from "../utils/Theme";

function Card(props) {
//   console.log(props.value);
  // const [toggle, settoggle] = useState(false)
  function ClickEvent(){
    if(props.index === props.currentCard){
      
      props.setcurrentCard(-1)

    }else{
     
    props.setcurrentCard(props.index)

    }
  }
  return (
    <CardContainer>
      <CardValue>{props.value}</CardValue>
      <CardLabel>
        <CardLabelInfo>{props.label}</CardLabelInfo>
        <CardLabelToolTip >
            <div onClick={() => ClickEvent()} >
            <Circle />

            </div>
            <ToolTip  isActive = {props.index === props.currentCard}
           
          title={props.tooltipTitle}
          info={props.tooltipDescription}
        />
        </CardLabelToolTip>
       
      </CardLabel>
      <CardSubLabel>{props.sublabel}</CardSubLabel>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
  min-width: 172px;
  /* width: 100%; */
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 8px 0;
  border: 1px solid #dfe1e5;
  position: relative;
`;
const CardValue = styled.div`
  font-size: 28px;
  color: ${theme.colors.primary};
`;
const CardLabel = styled.div`
margin:1rem;
  display: flex;
  flex-direction: row;
  
`;
const CardLabelToolTip = styled.div`
    margin-left:1rem;
    display:  flex ;
    flex-direction: column;
    position: relative;
`
const CardLabelInfo = styled.div`
 
    font-size: 12px;
    color: grey;
  
`
const CardSubLabel = styled.div`
  font-size: small;
  margin-top: 0;
  text-align: end;
`;

const Circle = () => {
  return (
    <svg
    style={{cursor:'pointer'}}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-info-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  );
};
