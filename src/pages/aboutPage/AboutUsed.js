import React from "react";
import makeup from "./makeup.png";
import "./AboutUsed.css";
import Icon from "@mdi/react";
import { mdiLeafCircleOutline } from "@mdi/js";
import { mdiWhiteBalanceIncandescent } from "@mdi/js";
import { mdiCertificate } from "@mdi/js";

const AboutUsed = () => {
  return (
    <div className="AboutUsed m-5 px-8">
      <div className="containerr">
        <div className="text">
          <h1 className="text-3xl pb-5 ">About used cosmetics</h1>
          <p className="aboutP">
            We appreciate the certainty, quality, and beauty with which all of
            you carry on with your life. We need to be your buddy as you go up
            against numerous symbols and find your own character and individual
            style be your buddy as you go up
            against numerous symbols.
          </p>
          <div className="icons">
            <div className="icoon">
              <div>
                <Icon path={mdiLeafCircleOutline} size={2} />
              </div>
              <p>100% Organic</p>
            </div>
            <div className="icoon">
              <div>
                <Icon path={mdiWhiteBalanceIncandescent} size={2} />
              </div>
              <p>Creative items</p>
            </div>
            <div className="icoon">
              <div>
                <Icon path={mdiCertificate} size={2} />
              </div>
              <p>Certificated</p>
            </div>
          </div>
        </div>
        <div className="imgAbout">
          <img className="img-new" src={makeup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsed;
