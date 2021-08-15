import React from "react";
import styled from "styled-components";
import { theme } from "../../utils/Theme";

function RecentlyFarm(props) {
  const [state, setstate] = React.useState(props.data);
  React.useEffect(() => {
    if (props.limit) {
      setstate(props.data.slice(0, props.limit));
    }
  }, []);
  return (
    <div style={{ margin: "0 1rem " }}>
      <Chartheader> Recently Farmed Chia</Chartheader>
      <ChartTable>
        <ChartItem>
          <Chartitemvisible>Block #</Chartitemvisible>
          <ChartitemHidden >Coin Hash</ChartitemHidden>
          {/* <Chartitemvisible>Farmer</Chartitemvisible> */}
          {/* <Chartitemvisible>Pool Luck</Chartitemvisible> */}
          <Chartitemvisible>Date</Chartitemvisible>
          <Chartitemvisible>Reward</Chartitemvisible>
        </ChartItem>
        {state.map((item, id) => (
          <ChartItem key={id}>
            <Chartitemvisible islong={true}>
              {item.confirmedAtHeight}
            </Chartitemvisible>

            <ChartitemHidden Darkmode={props.Darkmode}
              href={`https://xchscan.com/txns/${item.name}`}
              target="_blank"
            >
              {item.name}
            </ChartitemHidden>

            {/* <Chartitemvisible><a href={`/account/${item.winnerLauncherId}`}>{item.winnerLauncherId}</a></Chartitemvisible> */}
            {/* <Chartitemvisible>{item.luck}</Chartitemvisible> */}
            <Chartitemvisible>
              {new Date(item.createdAt).toLocaleDateString()}
            </Chartitemvisible>

            <Chartitemvisible>1.75 XCH</Chartitemvisible>
          </ChartItem>
        ))}
      </ChartTable>
    </div>
  );
}

export default RecentlyFarm;

const Chartheader = styled.h3``;

const ChartTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ChartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Chartitemvisible = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: flex-start;
  padding: 0.75rem 0;
  text-overflow: hidden;
  overflow: hidden;
  width: 100%;
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    cursor: pointer;
  }
  @media screen and (max-width: 786px) {
    max-width: 100px;

    a {
      /* display:flex; */
      /* flex-shrink:0; */
      /* flex-grow:1; */
    }
  }
`;
const ChartitemHidden = styled.a`
  display: flex;
  justify-content: flex-start;
  justify-content: flex-start;
  padding: 0.75rem 0;
  width: 100%;
  color:${({ Darkmode }) => (Darkmode ? theme.colors.primary : theme.colors.black)};
  text-decoration: none;
  text-overflow: hidden;
  overflow: hidden;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
