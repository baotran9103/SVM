import React from "react";
import {
  ContentContainer,
  ContentImage,
  Content as Cont,
  ButtonBound,
  ButtonGroup,
  ImageButton,
  RecentlyFarmButton,
  ChartContainer,
  Container,
  LauncherinputContainer,
  LauncherInput,
  SearchButton,
  SearchFrom,
  CardContainer,
  Cards,
} from "./StyledComponents";
import RecentlyFarm from "./RecentlyFarm";
import data from "../data/MOCK_DATA.json";
import { data as chartData } from "../data/ChartData";
import Chart from "./Chart2";
import { useQueries } from "react-query";
import { data2 as chartdata } from "../data/ChartData";
import LoadingPage from "../../utils/LoadingPage";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Content() {
  const Darkmode = useSelector((state) => state.Utils.Darkmode);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  var reverse = function (arr) {
    var result = [],
      ii = arr.length;
    for (var i = ii - 1; i !== 0; i--) {
      result.push(arr[i]);
    }
    return result;
  };
  // const reversed = reverse(chartdata.results);
  // console.log(reversed)
  const data = useQueries([
    {
      queryKey: "poolInfo",
      queryFn: () =>
        fetch("https://api.vastpool.net/pool/info").then((res) => res.json()),
    },
    {
      queryKey: "Winnings",
      queryFn: () =>
        fetch("https://api.vastpool.net/wallet/winning").then((res) =>
          res.json()
        ),
    },
  ]);
  const [launcherid, setlauncherid] = React.useState("");
  function InputChangeHandler(e) {
    e.preventDefault();
    setlauncherid(e.target.value);
  }

  let history = useHistory();
  function SubmitEvent(e) {
    e.preventDefault();
    history.push(`/account/${launcherid}`);
  }
  if (data[0].isLoading || data[1].isLoading) {
    <LoadingPage />;
  }
  // else if (data[0].isError || data[1].isError) {
  //   return "Server is down! Cannot fetch data !";
  // }
  const cardData = [
    {tittle:'Net Space',value:`${data[0].data ? data[0].data.netspace : 0} ${
      data[0].data ? data[0].data.netspaceUnit : ""
    }`},
    {tittle:'Farmers',value:`${data[0].data ? data[0].data.farmerOnline : 0}`},
    {tittle:'Pool Space',value:`${data[0].data ? data[0].data.poolSpace : 0} ${
      data[0].data ? data[0].data.poolSpaceUnit : ""
    }`},
    {tittle:'Block Found',value:`${
      data[0].data ? numberWithCommas(data[0].data.blockFound) : 0
    }`},
    {tittle:'Total Points',value:`${
      data[0].data ? numberWithCommas(data[0].data.poolTotalPoints) : 0
    }`},
  ]
  return (
    <div>
      <div>
        <ContentContainer>
          <Cont>
            <div style={{display:'flex', justifyContent:'flex-start',alignItems:'center'}}>
            <h4>
              Welcome to 
            </h4><div className='logo'>Vast Pool</div>
            </div>
            
            <h4>
              {/* Join forces to take back control of predictable Chia farming
            winnings with the official Chia Pooling Protocol */}
              Join one of  the world's biggest CHIA farming pool
            </h4>
            <ButtonGroup>
              <ButtonBound>How to join</ButtonBound>
              {/* <img src="/download-ios-app.png" alt="" />
            <img src="/download-android-app.png" alt="" /> */}
            </ButtonGroup>
          </Cont>
          <ContentImage src="/etherminegraphic.jpeg" alt="" />
        </ContentContainer>

      </div>
      <Cards>
        {
          cardData?.map((item,id)=> 
          
          <Card className='card' Darkmode={Darkmode} title={item.tittle} value = {item.value} key={id} islast={id==cardData.length-1}/>)
        }
      </Cards>

      <SearchFrom Darkmode={Darkmode} onSubmit={SubmitEvent}>
        <div style={{ display:'flex',justifyContent:'center', }}>
        <div style={{ width: "2rem", height: "2rem" }}>
            <SearchIcon />
          </div>
        </div>
         
          <div style={{ display:'flex',jusifyContent:'space-between',width:'100%'}}>
          <LauncherinputContainer>
            <LauncherInput
              value={launcherid}
              onChange={InputChangeHandler}
              type="text"
              placeholder="Launcher Id or alias"
            />
          </LauncherinputContainer>
          <SearchButton to={`/account/${launcherid}`}> Search</SearchButton>
          </div>
          
        </SearchFrom>
      <ChartContainer>
        <h1>Recent Pool Netspace</h1>
        {typeof data[0].data !== "undefined" ? (
          <Chart
            data={
              typeof data[0].data !== "undefined"
                ? data[0].data.poolSpaceHistories
                : []
            }
          />
        ) : null}
      </ChartContainer>
      <Container>
        {typeof data[1].data !== "undefined" ? (
          <RecentlyFarm Darkmode={Darkmode} data={data[1].data} limit={10} />
        ) : null}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0",
          }}
        >
          <RecentlyFarmButton to="/viewallfarmed">
            {" "}
            View More
          </RecentlyFarmButton>
        </div>
      </Container>
    </div>
  );
}

export default Content;

function Card({ title, value ,Darkmode,islast}) {
  return (
    <CardContainer Darkmode={Darkmode}>
      <h4 className="card-tittle">{title}</h4>
      <h4 className="card-value">{value}</h4>
      <span islast={islast}></span>
    </CardContainer>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWEidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}
