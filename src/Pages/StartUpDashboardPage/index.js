import React from "react";

import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import HeroBanner from "../../Components/DashboardComponents/Banner";

function StartUpDashboardPage() {
  const user = useSelector((state) => state.firebase.user);

  return (
    <div>
      <HeroBanner user={user} />
      <Calendar />
    </div>
  );
}

export default StartUpDashboardPage;
