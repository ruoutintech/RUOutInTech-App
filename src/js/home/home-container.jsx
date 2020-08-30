import React from "react";
import DashboardContainer from "../common/dashboard/dashboard-container";
import CAROUSEL_CONFIG from "./constants";
import Carousel from "../common/carousel/carousel";
import Title from "./title";
import FormDialog from '../common/form-dialog/form-dialog';

const HomeContainer = () => {
  return (
    <div>
      <DashboardContainer>
        <Title />
        <FormDialog />
        <Carousel config={CAROUSEL_CONFIG} />
      </DashboardContainer>
    </div>
  );
};

export default HomeContainer;
