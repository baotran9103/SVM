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
} from "./StyledComponents";
import RecentlyFarm from "./RecentlyFarm";
import data from "../data/MOCK_DATA.json";
import { data as chartData } from "../data/ChartData";
import Chart from "./Chart2";
import {useQueries} from 'react-query'
import { data2 as chartdata } from "../data/ChartData";
import LoadingPage from '../../utils/LoadingPage'
import {useSelector} from 'react-redux'
function Content() {
 const  Darkmode = useSelector(state=>state.Utils.Darkmode)
  var reverse = function(arr) {
    var result = [],
        ii = arr.length;
    for (var i = ii - 1;i !== 0;i--) {
        result.push(arr[i]);
    }
    return result;
 }
    // const reversed = reverse(chartdata.results);
    // console.log(reversed)
const data = useQueries(
  [
    {queryKey:'poolInfo',queryFn:() => 
    fetch(
      "https://api.vastpool.net/pool/info"
    ).then((res) => res.json())
  },
    {queryKey:'Winnings',queryFn:
    () =>
    fetch(
      "https://api.vastpool.net/wallet/winning"
    ).then((res) => res.json())
  },
  ]

)


if(data[0].isLoading || data[1].isLoading){
  <LoadingPage/>
}else if (data[0].isError || data[1].isLoading ){ return "Server is down! Cannot fetch data !"}


  return (
    <div>
      <ContentContainer>
        <Cont>
          <h4>
            Welcome to <span>Vast Pool</span>
          </h4>
          <h4>
            {/* Join forces to take back control of predictable Chia farming
            winnings with the official Chia Pooling Protocol */}
            JOIN ONE OF THE WORLD'S BIGGEST PERFORMING CHIA FARMING POOL
          </h4>
          <ButtonGroup>
            <ButtonBound>How to join</ButtonBound>
            <img src="/download-ios-app.png" alt="" />
            <img src="/download-android-app.png" alt="" />
          </ButtonGroup>
        </Cont>
        <ContentImage src="/etherminegraphic.jpeg" alt="" />

      </ContentContainer>
      <ChartContainer>
        <h3>Recent Pool Netspace</h3>
        {
          typeof data[0].data !=='undefined' ? <Chart data={typeof data[0].data !=='undefined'  ? data[0].data.poolSpaceHistories:[]} /> : null
        }
       
      </ChartContainer>
      {
          typeof data[1].data !=='undefined' ?  <RecentlyFarm Darkmode={Darkmode} data={data[1].data} limit={10} /> : null
        }
     
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
      >
        <RecentlyFarmButton to="/viewallfarmed"> View More</RecentlyFarmButton>
      </div>
    </div>
  );
}

export default Content;
