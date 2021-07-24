import React from "react";
import {useSelector} from 'react-redux'

import { results, poolStats } from "./Data";
import {
  PageContainer,
  PoolStat,
  PoolStatValueWrapper,
  LeaderBoardTable,
  TableHeader,TableItem
} from "./StyledComponents";
function LeaderBoard() {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function getJointDays(jd){
      const milsperday = 3600*1000*24
    var  datediff = Math.floor(Math.abs(new Date() - new Date(jd)))/milsperday

    if (datediff >=60){
        return `${Math.floor(datediff/30)} months ago`
    }
    else if (datediff >=30){
        return `${Math.floor(datediff/30)} month ago`
    }
    else if(datediff >=14){
        return `${Math.floor(datediff/7)} weeks ago`
    }
    else if(datediff >=7){
        return `${Math.floor(datediff/7)} week ago`
    }
    else{
        return `${Math.floor(datediff)} days ago`
    }

  }
  function getPlotSize(x){
     if (x>=(10**9)){
        return `${(x / (10 ** 9)).toFixed(2) } EiB`
      }
      else if (x>=(10**6)){
        return `${(x / (10 ** 6)).toFixed(2) } PiB`
      }
      else if  (x>=(10**3)){
           return `${(x / 10 ** 3).toFixed(2)}  TiB`
      }
      else {
          return  `${(x).toFixed(2)} B`
      }
      
  }
  const Darkmode = useSelector(state => state.Utils.Darkmode)
  console.log(Darkmode)
  return (
    <PageContainer>
      <h4>Leaderboard</h4>
      <PoolStat>
        <PoolStatValueWrapper>
          <div>Global Netspace</div>
          <div>{getPlotSize(poolStats.totalNetSpaceTiB*1000 )} </div>
        </PoolStatValueWrapper>
        <PoolStatValueWrapper>
          <div>Pool Netspace</div>
          <div>{getPlotSize(poolStats.poolNetSpaceTiB*1000) } </div>
        </PoolStatValueWrapper>
        <PoolStatValueWrapper>
          <div>Global Points</div>
          <div>{numberWithCommas(poolStats.globalPendingPoints)}</div>
        </PoolStatValueWrapper>
      </PoolStat>
      <LeaderBoardTable>
        <TableHeader>
          <div>Rank</div>
          <div>Farmer</div>
          <div>Plot Size</div>
          <div className="leaderboard_hidden">Difficulty</div>
          <div>Points</div>
          <div className="leaderboard_hidden">Joined</div>
        </TableHeader>
        {
            results.map((item,id)=>(
                <TableItem key={id}>
                    <div># {item.rank}</div>
                    <a Darkmode={Darkmode} href ={`/account/${item.launcherId}`} className="launcher_id">{item.launcherId}</a>
                    <div>{getPlotSize(item.estimatedPlotSizeTiB*1000)}</div>
                    <div className='leaderboard_hidden'>{item.lastDifficulty}</div>
                    <div>{numberWithCommas(item.pendingPoints)}</div>
                    <div className='leaderboard_hidden'>{(
                  getJointDays(item.joinDateTimeUtc)
                        )}</div>

                </TableItem>
            ))
        }
      </LeaderBoardTable>
    </PageContainer>
  );
}

export default LeaderBoard;
