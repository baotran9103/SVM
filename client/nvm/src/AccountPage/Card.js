import React, { useState } from "react";
import ToolTip from "./ToolTip";
import styled from "styled-components";
import { theme } from "../utils/Theme";

function Card(props) {
  //   console.log(props.value);
  // const [toggle, settoggle] = useState(false)
  function ClickEvent() {
    if (props.index === props.currentCard) {
      props.setcurrentCard(-1);
    } else {
      props.setcurrentCard(props.index);
    }
  }
  return (
    <CardContainer>
      <CardValue>{props.value}</CardValue>
      <CardLabel>
        <CardLabelInfo>{props.label}</CardLabelInfo>
         <CardLabelToolTip>
          <div
            onMouseEnter={() => ClickEvent()}
            onMouseLeave={() => ClickEvent()}
          >
            <Circle />
          </div>
          <ToolTip
            isActive={props.index === props.currentCard}
            title={props.tooltipTitle}
            info={props.tooltipDescription}
          />
        </CardLabelToolTip>
      </CardLabel>
      <CardSubLabel>{props.sublabel}</CardSubLabel>
      
      {/* <div style={{ overflow: "hidden" }}>
        <span className="lines line1"></span>
        <span className="lines line2"></span>
        <span className="lines line3"></span>
        <span className="lines line4"></span>
      </div> */}
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items:center;
  min-width: 172px;
  /* width: 100%; */
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 12px 0;
  border: 1px solid #dfe1e5;
  position: relative;
  /* overflow: hidden; */
  border-radius: 15px;
  box-shadow: inset 0 -5px 5px rgba(0,0,0,0.1),
              0 5px 10px rgba(0,0,0,0.1),
              0 10px 15px rgba(0,0,0,0.1);
  .lines {
    position: absolute;
    /* display:block; */
    overflow: hidden;
  }
  .line1 {
    top: 0;
    left:-100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent , #ff8723  , #cc2e5d);
    animation: animate1 2s linear infinite;
    @keyframes animate1 {
      0%{
        left:-100%;
      }
      100%{
        left:100%;
      }
    }
  }
  .line2 {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #ff8723, #cc2e5d);
    animation: animate2 2s linear infinite;
    animation-delay:1s;

    @keyframes animate2 {
      0%{
        top: -100%;
      }
      100%{
        top: 100%;
      
      }
    }
  }
  .line3 {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #ff8723, #cc2e5d);
    animation: animate3 2s linear infinite;
    animation-delay:2s;
    @keyframes animate3 {
      0%{
        right: -100%;
      }
      100%{
        right: 100%;
     
      
      }
    }
  }

  .line4 {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #cc2e5d, #ff8723  ,transparent);
    animation: animate4 2s linear infinite;
    animation-delay:3s;

    @keyframes animate4 {
      0%{
        bottom: -100%;
      }
      100%{
        bottom: 100%;
     
      }
    }
  }
`;
const CardValue = styled.div`
  font-size: 28px;
  color: ${theme.colors.primary};
`;
const CardLabel = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: row;
`;
const CardLabelToolTip = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const CardLabelInfo = styled.div`
  font-size: 12px;
  color: grey;
`;
const CardSubLabel = styled.div`
  font-size: small;
  margin: 4px;
  text-align: end;
`;

const Circle = () => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-info-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  );
};
