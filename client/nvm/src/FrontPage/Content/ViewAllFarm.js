import React from "react";
import RecentlyFarm from "./RecentlyFarm";
import data from "../data/MOCK_DATA.json";
import {useQueries} from 'react-query'
import LoadingPage from '../../utils/LoadingPage'
function ViewAllFarm({Darkmode}) {
  const data = useQueries(
    [
      
      {queryKey:'Winnings',queryFn:
      () =>
      fetch(
        "https://api.vastpool.net/wallet/winning"
      ).then((res) => res.json())
    },
    ]
  
  )
  if(data[0].isLoading ){
    <LoadingPage/>
  }else if (data[0].isError ){ return "Server is down! Cannot fetch data !"}
  return (
    <div style={{height:'100vh'}}>
  {
          typeof data[0].data !=='undefined' ?  <RecentlyFarm Darkmode={Darkmode} data={data[0].data}  /> : null
        }

      {/* <RecentlyFarm data={data} /> */}
    </div>
  );
}

export default ViewAllFarm;
