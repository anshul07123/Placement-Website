import React from "react";
import BarChart2 from "../assets/images/bar-chart-2.png";
import FullTimeOffers from "../assets/images/full-time-offers.png"
import Above25LpaImg from "../assets/images/above-25-lpa.png";
import CompaniesVisitedImg from "../assets/images/companies-visited.PNG";
import DomainWiseImg from "../assets/images/domain-wise.png";
import HighestPackageImg from "../assets/images/highest-package.png";
import PlacedPercentageImg from "../assets/images/placed-percentage.PNG";
import PyramidImg from "../assets/images/pyramid-stats.png";
import SummerInternsImg from "../assets/images/summer-interns.png";
import ArrowsImg from "../assets/images/arrows.PNG";
import DreamRoundOffersImg from "../assets/images/dream-round-offers.PNG"
import OffersMadeImg from "../assets/images/39-offers.PNG"
import GearsImg from "../assets/images/gears.PNG"

const Placement = props => {
  return (
    <div className="stats-outer-wrapper">
      <h1 className="ps-name-heading, pr-main-heading">Placement Statistics 2018-19</h1>
      <p style={{float:'right',fontSize:'15px'}}>* till November 2018</p>
      <div className="images-row-2">
        <div className="images-row-2-inner">
          <img src={ArrowsImg} alt="Placement Stats 2018" />
          <img src={GearsImg} alt="Placement Stats 2018"/>
        </div>
      </div>
      <div className="images-row-3">
        <div className="images-row-3-inner">
          <img src={DreamRoundOffersImg} alt="Dream Round Offers" />
          <img src={DomainWiseImg} alt="Domain Wise" />
        </div>
      </div>
      <div className="images-row-4">
        <div className="images-row-4-inner">
          <img src={PlacedPercentageImg} alt="Placed Percentage" />
          <img src={CompaniesVisitedImg} alt="Companies Visited" />
          <img src={OffersMadeImg} alt="Offers Made" />
        </div>
      </div>
      
    </div>
  );
};

export default Placement;
