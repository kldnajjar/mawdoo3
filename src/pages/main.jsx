import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import CommonListing from "../components/common-listing";
import MostListing from "../components/most-listing";

import CommonListingData from "../config/commonListingData";
import MostListingData from "../config/mostListingData";

class Main extends Component {
  render() {
    return (
      <Container className="rtl my-5">
        <Row>
          <Col>
            <strong className="main-title">المدونات الشائعه</strong>
          </Col>
        </Row>
        <Row>
          <Col xl="8" className="common-listing-container">
            <CommonListing listing={CommonListingData} />
          </Col>
          <Col xl="4" className="most-listing-container">
            <MostListing listing={MostListingData} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
