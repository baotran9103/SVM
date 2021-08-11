import React,{useState} from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../utils/LoadingPage";
import ErrorPage from "../utils/ErrorPage";
import { useQueries } from "react-query";
import Card from "./Card";
import { CardsRow } from "./StyledComponents";
import Partials from './Partials'
import Payout from './Payout'
import Tabs from './Tabs'

function AccountPage() {
  
    const [currentIndex, setcurrentIndex] = useState(0)

  let { launcherid } = useParams();
  const info = useQueries([
    {
      queryKey: "farmerInfo",
      queryFn: () =>
        fetch(`https://api.vastpool.net/farmer/${launcherid}`).then((res) =>
          res.json()
        ),
    },
    {
      queryKey: "payoutHistory",
      queryFn: () =>
        fetch(`https://api.vastpool.net/farmer/payout/${launcherid}`).then(
          (res) => res.json()
        ),
    },
    {
      queryKey: "chiaPrice",
      queryFn: () =>
        fetch(`https://xchscan.com/api/chia-price`).then((res) => res.json()),
    },
    {
        queryKey: "farmerPartials",
        queryFn: () =>
          fetch(`https://api.vastpool.net/partial/${launcherid}`).then(
            (res) => res.json()
          ),
      },
  ]);

  console.log(launcherid);
  if (info[0].isLoading || info[1].isLoading   ||  info[2].isLoading  ||  info[3].isLoading) {
    return <LoadingPage />;
  } else if (info[0].isError || info[1].isError  || info[2].isError ||  info[3].isError) {
    return <ErrorPage />;
  }
  function getAmount(amount){
    var res = 0;
    console.log(amount)
    // amount.forEach()
    amount.forEach(item=> res = res+ item.amount)
    return (res/(10**12)).toFixed(2)
}
  return (
    <div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',textOverflow:'ellipsis', whiteSpace: 'nowrap',overflow:'hidden'}}>
        <h3 style={{textOverflow:'ellipsis', whiteSpace: 'nowrap',overflow:'hidden'}}>{`0x${launcherid}`}</h3>

        </div>
      
      <CardsRow>
        <Card
          value={info[0].data.points}
          label={"Farmer Points"}
          sublabel={""}
          tooltipTitle="Farmer Points"
          tooltipDescription="Farmer Points in Vast Pool"
        />
        <Card
          value={info[0].data.difficulty}
          label={"Difficulty"}
          sublabel={""}
          tooltipTitle="Farmer Difficulty"
          tooltipDescription="Farmer Difficulty in Vast Pool"
        />
        <Card
          value={getAmount(info[1].data)}
          label={"Total Paid XCH"}
          sublabel={`$${(getAmount(info[1].data)*info[2].data.usd).toFixed(2)} `}
          tooltipTitle="Total Paid XCH"
          tooltipDescription="The total amount of XCH you have been paid out. See the Payout tab for details."
        />
      </CardsRow>
      <Tabs currentIndex={currentIndex} setcurrentIndex={setcurrentIndex}/>
      {
          currentIndex === 1 ?  <Partials data = {info[3].data}/> : null
      }
      {
          currentIndex === 0 ?  <Payout data = {info[1].data}/> : null
      }
      
     
    </div>
  );
}

export default AccountPage;
