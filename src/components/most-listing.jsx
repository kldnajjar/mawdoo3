import React, { Component } from "react";
import { Card, Row, Col } from "reactstrap";

class MostListing extends Component {
  drawItems = item => {
    return (
      <React.Fragment key={`most-listing-${item.id}`}>
        <Card>
          <Row className="my-2 mx-0">
            <Col xl="1" lg="1" md="1" sm="1" className="number ml-2">
              {`${item.arabicNumber}.`}
            </Col>
            <Col
              xl="2"
              lg="2"
              md="2"
              sm="2"
              xs="12"
              className="image-container p-0"
            >
              <img
                src={item.image}
                alt="Broken"
                width="63"
                height="70"
                className="image"
              />
            </Col>
            <Col className="content">
              <Row>
                <Col>
                  <strong className="title d-block">{item.title}</strong>
                </Col>
              </Row>

              <Row className="mb-1">
                <Col>
                  <span className="icon-pencil yellow-color ml-2"></span>
                  {item.author}
                </Col>
              </Row>
              <Row className="information">
                <Col className="d-flex">
                  <span className="icon-calendar yellow-color ml-2"></span>
                  {item.publishDate}
                  <span className="mx-2">|</span>
                  <span className="icon-target yellow-color ml-2"></span>
                  {item.timeToRead}
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Row className="my-1 pl-3 seperator">
          <Col className="border-bottom"></Col>
        </Row>
      </React.Fragment>
    );
  };

  render() {
    const { listing } = this.props;
    return (
      <React.Fragment>
        <strong className="component-title"> المنشورات الاكثر إلهاماً</strong>

        <div className="most-listing-content">
          <Row className="my-2 seperator">
            <Col className="border-bottom"></Col>
          </Row>
          {listing.map(item => {
            return this.drawItems(item);
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default MostListing;
