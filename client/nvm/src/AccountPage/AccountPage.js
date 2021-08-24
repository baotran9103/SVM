import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import LoadingPage from "../utils/LoadingPage";
import ErrorPage from "../utils/ErrorPage";
import { useQueries } from "react-query";
import Card from "./Card";
import { CardsRow } from "./StyledComponents";
import Partials from "./Partials";
import Payout from "./Payout";
import Tabs from "./Tabs";
import Rewards from "./Rewards";
import AccountChart from "./AccountChart";
import { useSelector } from "react-redux";
import PopUp from "./PopUp/Index";
function AccountPage() {
  const [currentCard, setcurrentCard] = useState(-1);
  const [currentIndex, setcurrentIndex] = useState(0);
  const price = useSelector((state) => state.Utils.chiaPrice);
  let { launcherid } = useParams();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

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
      queryKey: "farmerPartials",
      queryFn: () =>
        fetch(`https://api.vastpool.net/partial/${launcherid}`).then((res) =>
          res.json()
        ),
    },
    {
      queryKey: "farmerStats",
      queryFn: () =>
        fetch(`https://api.vastpool.net/farmer/stats/${launcherid}`).then(
          (res) => res.json()
        ),
    },
    {
      queryKey: "FarmerWining",
      queryFn: () =>
        fetch(`https://api.vastpool.net/farmer/earning/${launcherid}`).then(
          (res) => res.json()
        ),
    },
  ]);

  // if (
  //   info[0].isLoading ||
  //   info[1].isLoading ||
  //   info[2].isLoading ||
  //   info[3].isLoading ||
  //   info[4].isLoading
  // ) {
  //   return <LoadingPage />;
  // }
  // else if (
  //   info[0].isError ||
  //   info[1].isError ||
  //   info[2].isError ||
  //   info[3].isError ||
  //   info[4].isError
  // ) {
  //   return <ErrorPage />;
  // }
  var farmer_info = info[0].data;
  var payoutHistory = info[1].data;
  var farmerPartials = info[2].data;
  var farmerStats = info[3].data;
  var farmerRewards = info[4].data;

  const groups = payoutHistory
    ? payoutHistory.reduce((groups, item) => {
        const date = item.payDate.split("T")[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
        return groups;
      }, {})
    : [];

  const groupArrays = Object.keys(groups).map((date) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return {
      date,
      amount:
        groups[date].reduce(
          (accumulator, currentValue) => accumulator + currentValue.amount,
          0
        ) /
        10 ** 12,
    };
  });

  function getAmount(amount) {
    var res = 0;

    // amount.forEach()
    amount.forEach((item) => (res = res + item.amount));
    return (res / 10 ** 12).toFixed(2);
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      
      <PopUp
        farmer_info={farmer_info ? farmer_info.name : launcherid} token={query.get('token')}
        authentication_token={query.get("authentication_token")}
        launcherid={launcherid}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >{`${
          farmer_info
            ? farmer_info.name
            : `Cannot find information for ${launcherid}`
        }`}</h3>
      </div>

      <CardsRow>
        <Card
          index={0}
          currentCard={currentCard}
          setcurrentCard={setcurrentCard}
          value={farmer_info ? farmer_info.points : 0}
          label={"Farmer Points"}
          sublabel={""}
          tooltipTitle="Farmer Points"
          tooltipDescription="Farmer Points in Vast Pool"
        />
        <Card
          index={1}
          currentCard={currentCard}
          setcurrentCard={setcurrentCard}
          value={info[3].data ? numberWithCommas(info[3].data.plots) : 0}
          label={"Plot size"}
          sublabel={""}
          tooltipTitle="Estimated Plot Size"
          tooltipDescription="This is Space Pool's estimate of your total plot size across all harvesters. This is only an estimate and will fluctuate within a range of your actual plot size. Your rewards are NOT calculated off this estimate."
        />
        <Card
          index={2}
          currentCard={currentCard}
          setcurrentCard={setcurrentCard}
          value={farmer_info ? farmer_info.difficulty : 0}
          label={"Difficulty"}
          sublabel={""}
          tooltipTitle="Farmer Difficulty"
          tooltipDescription="Farmer Difficulty in Vast Pool"
        />
        {/* <Card
        index = {3}

        currentCard={currentCard}
        setcurrentCard={setcurrentCard}
          value={farmer_info.difficulty}
          label={"Difficulty"}
          sublabel={""}
          tooltipTitle="Farmer Difficulty"
          tooltipDescription="Farmer Difficulty in Vast Pool"
        /> */}
        <Card
          index={4}
          currentCard={currentCard}
          setcurrentCard={setcurrentCard}
          value={payoutHistory ? getAmount(payoutHistory) : 0}
          label={"Total Paid XCH"}
          sublabel={
            payoutHistory
              ? `$${(getAmount(payoutHistory) * price.usd).toFixed(2)} `
              : 0
          }
          tooltipTitle="Total Paid XCH"
          tooltipDescription="The total amount of XCH you have been paid out. See the Payout tab for details."
        />
      </CardsRow>
      <AccountChart data={info[3].data ? info[3].data.estimates : []} />

      <Tabs currentIndex={currentIndex} setcurrentIndex={setcurrentIndex} />
      {currentIndex === 2 ? (
        <Partials data={farmerPartials ? farmerPartials : []} />
      ) : null}
      {currentIndex === 1 ? (
        <Payout price={price.usd} data={payoutHistory ? payoutHistory : []} />
      ) : null}
      {(currentIndex === 0) && farmerRewards ? (
        <Rewards
          chartData={groupArrays}
          conversion={price.usd}
          data={farmerRewards}
        />
      ) : null}
    </div>
  );
}

export default AccountPage;
