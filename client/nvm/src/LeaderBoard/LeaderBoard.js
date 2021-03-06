import React from "react";
import { useSelector } from "react-redux";
import LoadingPage from "../utils/LoadingPage";
import ErrorPage from "../utils/ErrorPage";
import { results, poolStats } from "./Data";
import {
  PageContainer,
  PoolStat,
  PoolStatValueWrapper,
  LeaderBoardTable,
  TableHeader,
  TableItem,
} from "./StyledComponents";
import { useQueries } from "react-query";

function LeaderBoard() {
  const info = useQueries([
    {
      queryKey: "poolInfo",
      queryFn: () =>
        fetch("https://api.vastpool.net/pool/info").then((res) => res.json()),
    },
    {
      queryKey: "LeaderBoard",
      queryFn: () =>
        fetch("https://api.vastpool.net/farmer/leaderboard").then((res) =>
          res.json()
        ),
    },
  ]);

  // console.log(info);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function getJointDays(jd) {
    const milsperday = 3600 * 1000 * 24;
    var datediff = Math.floor(Math.abs(new Date() - new Date(jd))) / milsperday;

    if (datediff >= 60) {
      return `${Math.floor(datediff / 30)} months ago`;
    } else if (datediff >= 30) {
      return `${Math.floor(datediff / 30)} month ago`;
    } else if (datediff >= 14) {
      return `${Math.floor(datediff / 7)} weeks ago`;
    } else if (datediff >= 7) {
      return `${Math.floor(datediff / 7)} week ago`;
    } else {
      return `${Math.floor(datediff)} days ago`;
    }
  }
  function getPlotSize(x) {
    if (x >= 10 ** 9) {
      return `${(x / 10 ** 9).toFixed(2)} EiB`;
    } else if (x >= 10 ** 6) {
      return `${(x / 10 ** 6).toFixed(2)} PiB`;
    } else if (x >= 10 ** 3) {
      return `${(x / 10 ** 3).toFixed(2)}  TiB`;
    } else {
      return `${x.toFixed(2)} B`;
    }
  }
  const Darkmode = useSelector((state) => state.Utils.Darkmode);

  // if (info[0].isLoading || info[1].isLoading) {
  //   return <LoadingPage />;
  // }
  // }else if (info[0].isError || info[1].isError){
  //   return (<ErrorPage />)
  // }

  return (
    <PageContainer Darkmode={Darkmode}>
      <div className='leaderboard-header'>
      <h1>Leaderboard</h1>

      </div>
      <div > 

     
      <PoolStat Darkmode={Darkmode}>
        {/* <PoolStatValueWrapper>
          <div>Global Netspace</div>
          <div>{getPlotSize(info[0].data.netspaceRaw )} </div>
        </PoolStatValueWrapper> */}
        <PoolStatValueWrapper>
          <div>Pool Netspace</div>
          <div>
            {info[0].data
              ? info[0].data.poolSpace + " " + info[0].data.poolSpaceUnit
              : 0}{" "}
          </div>
        </PoolStatValueWrapper>
        <PoolStatValueWrapper>
          <div>Global Points</div>
          <div>
            {info[0].data ? numberWithCommas(info[0].data.poolTotalPoints) : 0}
          </div>
        </PoolStatValueWrapper>
      </PoolStat>
      <LeaderBoardTable Darkmode={Darkmode}>
        <TableHeader Darkmode={Darkmode}>
          <div>Rank</div>
          <div>Farmer</div>
          <div>Plot Size</div>
          <div className="leaderboard_hidden">Difficulty</div>
          <div>Points</div>
          {/* <div className="leaderboard_hidden">Joined</div> */}
        </TableHeader>
        {info[1].data
          ? info[1].data.map((item, id) => (
              <TableItem key={id}>
                <div> {`${id + 1} ${ id==0?id==1?id==2?'rd':'nd':'st':'th'} `}</div>
                <a
                  Darkmode={Darkmode}
                  href={`/account/${item.launcherId}`}
                  className="launcher_id"
                >
                  {item.name ? item.name : item.launcherId}
                </a>
                {/* <div>{getPlotSize(item.estimatedPlotSizeTiB*1000)}</div> */}
                <div>{item.plots}</div>
                <div className="leaderboard_hidden">{item.difficulty}</div>
                <div>{numberWithCommas(item.points)}</div>
                {/* <div className='leaderboard_hidden'>{(
                  getJointDays(item.joinDateTimeUtc)
                        )}</div> */}
              </TableItem>
            ))
          : null}
          
      </LeaderBoardTable>
      </div>
    </PageContainer>
  );
}

export default LeaderBoard;
