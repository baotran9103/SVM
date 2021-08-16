import React from "react";
import Toggle from "./Toggle";
import {
  NavContainer,
  StickerInfo,
  StickerInfoData,
  StickerPercent,
  LauncherinputContainer,
  LauncherInput,
  SearchButton,
} from "./StyledComponents";
import ChartPopUp from "./ChartPopUp";


function NavbarRight({Darkmode,data}) {
  const [launcherid, setlauncherid] = React.useState("");
  const [showchart, setshowchart] = React.useState(false);

  var config = {
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=XCH',
    headers: { 
      'X-CMC_PRO_API_KEY': '4896458c-8163-4bc0-8807-b6be27c405ce'
    }
  };
  
  
  function InputChangeHandler(e) {
    e.preventDefault();
    setlauncherid(e.target.value);
  }
  function SearchClick() {
    console.log(launcherid);
  }
  const apikey = "4896458c-8163-4bc0-8807-b6be27c405ce";
 
  return (
    <NavContainer>
      <Toggle />
      <StickerInfo
        href="https://coinmarketcap.com/currencies/chia-network/"
        onMouseEnter={() => setshowchart(true)}
        onMouseLeave={() => setshowchart(false)}
      >
        <StickerInfoData Darkmode={Darkmode}> ${data.usd}</StickerInfoData>
        <StickerPercent ispositive={1.16 > 0}>USD/XCH</StickerPercent>
        <ChartPopUp showchart={showchart} />
      </StickerInfo>
      <LauncherinputContainer>
        <LauncherInput
          value={launcherid}
          onChange={InputChangeHandler}
          type="text"
          placeholder="Launcher Id or alias"
        />
      </LauncherinputContainer>
      <SearchButton to={`/account/${launcherid}`}> Search</SearchButton>
    </NavContainer>
  );
}

export default NavbarRight;
