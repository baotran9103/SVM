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

import { data as chartdata } from "../data/ChartData";
function Content() {
  var reverse = function(arr) {
    var result = [],
        ii = arr.length;
    for (var i = ii - 1;i !== 0;i--) {
        result.push(arr[i]);
    }
    return result;
 }
    const reversed = reverse(chartdata.results);
    console.log(reversed)
  return (
    <div>
      <ContentContainer>
        <ContentImage src="/hero.png" alt="" />
        <Cont>
          <h4>
            Welcome to <span>Vast Pool</span>
          </h4>
          <h4>
            Join forces to take back control of predictable Chia farming
            winnings with the official Chia Pooling Protocol
          </h4>
          <ButtonGroup>
            <ButtonBound>How to join</ButtonBound>
            <img src="/download-ios-app.png" alt="" />
            <img src="/download-android-app.png" alt="" />
          </ButtonGroup>
        </Cont>
      </ContentContainer>
      <ChartContainer>
        <h3>Recent Pool Netspace</h3>
        <Chart data={reversed} />
      </ChartContainer>

      <RecentlyFarm data={data} limit={10} />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
      >
        <RecentlyFarmButton to="/viewallfarmed"> View More</RecentlyFarmButton>
      </div>
    </div>
  );
}

export default Content;
