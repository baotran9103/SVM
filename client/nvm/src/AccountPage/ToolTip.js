import React from "react";
import styled from "styled-components";

function ToolTip(props) {
  return (
    <ToolTipContainer isActive={props.isActive} toggle={props.toggle}>
      {/* <Arrow /> */}
      <ToolTipBody isActive={props.isActive}>
        <Header>{props.title}</Header>
        <div>{props.info}</div>
      </ToolTipBody>
    </ToolTipContainer>
  );
}

export default ToolTip;

const ToolTipContainer = styled.div`
  /* display:  ${({isActive}) => isActive ? 'block':'none'} ; */
  position: absolute;
  z-index: 100;
  top: 1.5rem;
  left: -50%;
  transform:translatex(-60%);
  /* transform: ${({isActive})=> isActive ? 'translatex(-60%)':'translatex(-100%)'}; */
  z-index: ${({isActive})=> isActive ? '1000':'-1'};;
    opacity: ${({isActive})=> isActive ? '1':'0'};
    /* height: ${({isActive})=> isActive ? '100':'0%'}; */
    transition:all 0.3s ease-in-out;
  /* max-width: 276px; */
  color: #212529;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
`;

const Arrow = styled.div`
  margin: 0px;
  position: relative;
  top:-1rem;
  left: 0px;
  transform: translate(129px, 0px);
  width: 1rem;
    height: .5rem;
    /* background:#fff; */
  ::before {
    top: 0;
    border-width: 0 0.5rem 0.5rem;
    border-bottom-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
    box-sizing: border-box;



  }
  ::after {
    top: 1px;
    border-width: 0 0.5rem 0.5rem;
    border-bottom-color: #fff;
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
    box-sizing: border-box;

  }
`;

const ToolTipBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 200px;
    height: ${({isActive})=> isActive ? '100%':'0%'};
  transition:all 0.3s ease-in-out;
   h3,div{
       padding:1rem;
   }
`

const Header = styled.h3`
  
  padding: 0.5rem 0.75rem;
  margin: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);

  ::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -0.5rem;
    content: "";
    border-bottom: 1px solid #f7f7f7;
  }
`;
