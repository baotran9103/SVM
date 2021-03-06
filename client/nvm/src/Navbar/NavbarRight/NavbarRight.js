import React,{useState} from "react";
import Toggle from "./Toggle";
import {
  NavContainer,
  StickerInfo,
  StickerInfoData,
  StickerPercent,
  LauncherinputContainer,
  LauncherInput,
  SearchButton,NavButton,
} from "./StyledComponents";
import ChartPopUp from "./ChartPopUp";


function NavbarRight({Darkmode,data}) {
  const [launcherid, setlauncherid] = useState("");
  const [showchart, setshowchart] = useState(false);

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
        href="https://www.coingecko.com/en/coins/chia"
        onMouseEnter={() => setshowchart(true)}
        onMouseLeave={() => setshowchart(false)}
      >
        <StickerInfoData  Darkmode={Darkmode}> <div className='NavPrice'>${data?data?.market_data?.current_price.usd:''}</div> </StickerInfoData>
        <StickerPercent ispositive={1.16 > 0}>USD/XCH</StickerPercent>
        {/* <ChartPopUp showchart={showchart} /> */}
      </StickerInfo>
      <NavButton id = {1}>Join Now</NavButton>
      <NavButton id = {1}>Contact Us</NavButton>
      {/* <LauncherinputContainer>
        <LauncherInput
          value={launcherid}
          onChange={InputChangeHandler}
          type="text"
          placeholder="Launcher Id or alias"
        />
      </LauncherinputContainer>
      <SearchButton to={`/account/${launcherid}`}> Search</SearchButton> */}
    </NavContainer>
  );
}

export default NavbarRight;
