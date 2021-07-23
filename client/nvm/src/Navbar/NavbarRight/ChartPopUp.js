import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import styled from "styled-components";
function ChartPopUp(props) {
  return (
    <PopUpContainer disabled showchart={props.showchart}>
      <TradingViewWidget
        symbol="OKEX:XCHBTC*COINBASE:BTCUSD"
        theme={Themes.DARK}
        locale="en"
        // width="150"
        // height="100"
        autosize
      />
    </PopUpContainer>
  );
}

export default ChartPopUp;

const PopUpContainer = styled.div`
  position: absolute;
  pointer-events: ${({showchart})=> showchart?"":"hidden"};
  height: ${({ showchart}) =>
   showchart ? "300px" : "0px"};
  top:${({showchart})=> showchart?"100%":"-200%"};
  /* z-index: ${({showchart})=> showchart?1:-1}; */
  width: 300px;

  /* top: 100%; */
  opacity: ${({showchart})=> showchart?1:0};
  transition: 0.3s all ease-in-out;
`;
