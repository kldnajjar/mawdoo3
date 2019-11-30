import React, { Component } from "react";
import { Card, Row, Col } from "reactstrap";

class CommonListing extends Component {
  drawItems = item => {
    return (
      <Card key={`common-listing-${item.id}`} className="mb-3">
        <Row className="m-0">
          <Col xl="4" lg="3" md="4" className="image-container p-0">
            <img
              src={item.image}
              alt="Broken"
              className="image"
              width="257"
              height="142"
            />
          </Col>
          <Col xl="8" lg="9" md="8" className="py-3">
            <Row>
              <Col>
                <strong className="title mb-2 d-block">{item.title}</strong>
              </Col>
              <Col className="col-1 badge">
                {item.isFeatured && (
                  <span className="icon-bookmark dark-gray-color ml-2"></span>
                )}
                {!item.isFeatured && (
                  <span className="icon-bookmark-outline dark-gray-color ml-2"></span>
                )}
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="description relative">{item.description}</p>
              </Col>
            </Row>

            <Row className="information">
              <Col className="right">
                <span className="icon-pencil yellow-color ml-2"></span>
                {item.author}
                <span className="light-gray-color d-inline-block mx-1">في</span>
                {item.type}
              </Col>
              <Col className="left">
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
    );
  };

  render() {
    const { listing } = this.props;
    return (
      <React.Fragment>
        {listing.map(item => {
          return this.drawItems(item);
        })}

        <Row className="more-content text-center">
          <Col>
            <b>المزيد من الدونات الشائعه</b>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default CommonListing;
