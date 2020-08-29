import React from "react";
import DashboardContainer from "../common/dashboard/dashboard-container";
import CAROUSEL_CONFIG from "./constants";
import Carousel from "../common/carousel/carousel";

const HomeContainer = () => {
  return (
    <div>
      <DashboardContainer>
        <Carousel config={CAROUSEL_CONFIG} />
      </DashboardContainer>
    </div>
  );
};

export default HomeContainer;
