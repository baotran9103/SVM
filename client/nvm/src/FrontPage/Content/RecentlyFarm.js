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
        <ChartItem Darkmode={props.Darkmode}>
          <Chartitemvisible className='ChartHeader'>Block #</Chartitemvisible>
          <ChartitemHidden className='ChartHeader'>Coin Hash</ChartitemHidden>
          {/* <Chartitemvisible>Farmer</Chartitemvisible> */}
          {/* <Chartitemvisible>Pool Luck</Chartitemvisible> */}
          <Chartitemvisible className='ChartHeader'>Date</Chartitemvisible>
          <Chartitemvisible className='ChartHeader'>Reward</Chartitemvisible>
        </ChartItem>
        {state.map((item, id) => (
          <ChartItem key={id} Darkmode={props.Darkmode}>
            <Chartitemvisible Darkmode={props.Darkmode} href={`https://xchscan.com/blocks/${item.confirmedAtHeight}`}  target="_blank" islong={true}>
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
            <Chartitemvisible Darkmode={props.Darkmode}>
              {new Date(item.createdAt).toLocaleString()}
            </Chartitemvisible>

            <Chartitemvisible Darkmode={props.Darkmode}>1.75 XCH</Chartitemvisible>
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
   /* grid-template-columns: 1fr 3fr 3fr 1fr 1fr 1fr; */
  grid-template-columns: 1fr 3fr 3fr 1fr ;
  column-gap: 0.5rem;
  width: 100%;
  border-bottom:1px solid ${({ Darkmode }) => (Darkmode ? theme.colors.white : theme.colors.black)};;
 
  .ChartHeader{
    font-size:1.15rem;
    font-weight:bold;
    color:${({ Darkmode }) => (Darkmode ? theme.colors.white : theme.colors.black)};
    @media screen and (max-width: 768px) {
      font-size:1rem;

  }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Chartitemvisible = styled.a`
  display: flex;
  justify-content: flex-start;
  justify-content: flex-start;
  padding: 0.75rem 0;
  text-overflow: hidden;
  overflow: hidden;
  width: 100%;
  text-decoration:none;
  color:${({ Darkmode }) => (Darkmode ? theme.colors.white : theme.colors.black)};

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
  color:${({ Darkmode }) => (Darkmode ? theme.colors.primary : theme.colors.primary)};
  text-decoration: none;
  text-overflow: hidden;
  overflow: hidden;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
