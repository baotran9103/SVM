import React from "react";
import RecentlyFarm from "./RecentlyFarm";
import data from "../data/MOCK_DATA.json";

function ViewAllFarm() {
 
  return (
    <div>
  

      <RecentlyFarm data={data} />
    </div>
  );
}

export default ViewAllFarm;
