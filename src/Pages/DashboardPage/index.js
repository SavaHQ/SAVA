import React from "react";

import { useSelector } from "react-redux";
import Commingsoon from "../../Components/ComingSoonComponent/commingSoon";
import HeroBanner from "../../Components/DashboardComponents/Banner";

function DashboardPage() {
  const user = useSelector((state) => state.firebase.user);

  return (
    <div>
      <HeroBanner user={user} />
      <Commingsoon />
    </div>
  );
}

export default DashboardPage;
