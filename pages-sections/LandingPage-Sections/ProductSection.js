import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Bars from "@material-ui/icons/SignalCellularAlt";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Stress-free business growth.</h2>
          <h5 className={classes.description}>
            Growing your business can be time consuming, stressful, and
            confusing. Rather than trying to do it on your own or hiring an
            in-house marketer, let our team of experts do the job for{" "}
            <strong>less than half the price of a full time employee</strong>.
            Our marketing and social media experts will help you every step of
            the way.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Let's talk."
              description="In just a quick 10 minute phone call, we can assess your business needs and determine the best strategy to help your business thrive."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Start your campaign."
              description="Once you approve, we will start working on your specific strategy to bring you more customers and more sales."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Thrive."
              description="Enjoy the benefits of social media marketing, and watch your busines thrive like never before."
              icon={Bars}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
