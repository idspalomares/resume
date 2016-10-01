import React, { Component } from 'react';
import { Thumbnail, Grid, Col, Row } from 'react-bootstrap';
import './myinfo.css'
import $ from 'jquery';
import JSON_MESSAGE from '../messages/message.json';
window.$ = $;

class MyInfo extends Component {

  render() {
    return(
      <div className="myinfo-content">
        <div className="row">
          <div className="col-md-12 myinfo-content-holder">
            <div className="row">
              <h1 className="info-name">
              <span>Engineering</span>
              <span>Software</span>
              <span>Application</span>
              <span>Development</span>
              </h1>
            </div>

            <div className="row">
              <Grid>
                <div className="col-md-2">
                  <div className="vi vi-http"></div>
                </div>
                <div className="col-md-2">
                  <div className="vi vi-database"></div>
                </div>
                <div className="col-md-2">
                  <div className="vi vi-bugfix"></div>
                </div>
                <div className="col-md-2">
                  <div className="vi vi-comp"></div>
                </div>
                <div className="col-md-2">
                  <div className="vi vi-app"></div>
                </div>
                <div className="col-md-2">
                  <div className="vi vi-tag"></div>
                </div>
              </Grid>
            </div>

            <div className="row">
              <h1 className="info-fullname">
                WEB <span className="green glyphicon glyphicon-transfer" aria-hidden="true"></span>&nbsp;
                INTEGRATION <span className="green glyphicon glyphicon-transfer" aria-hidden="true"></span>&nbsp;
                AGILE <span className="green glyphicon glyphicon-transfer" aria-hidden="true"></span>&nbsp;
                FULLSTACK <span className="green glyphicon glyphicon-transfer" aria-hidden="true"></span>
                &nbsp;&nbsp;OPEN SOURCE&nbsp;&nbsp;<span className="green glyphicon glyphicon-transfer" aria-hidden="true"></span>
                &nbsp;&nbsp;BEST PRACTICES</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <hr/>
          <div className="col-md-3" align="center">

            <Row>
              <img className="thumbnail" src="./img/me.jpg" />
            </Row>

          </div>
          <div className="col-md-9 greeting-item">
            <div className="row">
              <p></p>
            </div>
            <div className="row">
              <div className="row">
                <div dangerouslySetInnerHTML={{__html: JSON_MESSAGE.myinfo.header.myGreeting}}></div>

                <div className="signature">
                  <h1 className="header-fullname">
                    ~ Isaac Palomares
                  </h1>
                  <h5 className="header-title">Fullstack Developer</h5>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default MyInfo;
