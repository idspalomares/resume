import React, { Component } from 'react';
import MyInfo from './content/MyInfo.js';
import Skills from './content/Skills.js';
import Timeline from './content/Timeline.js';
import JSON_MESSAGE from './messages/message.json';
import $ from 'jquery';

class Content extends Component {

  componentDidMount() {
      var top = $('.float-box').offset().top - parseFloat($('.float-box').css('marginTop').replace(/auto/, 0));
      $(window).scroll(function (event) {
          var y = $(this).scrollTop();
          if (y >= top) {
              var difference = y - top;
              $('.float-box').css("top", difference);
       }
      });
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div id="my_info" className="row">
                      <MyInfo />
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row">
              <div>
                  <div id="timeline" className="row">
                    <Timeline jobs={JSON_MESSAGE.jobs} />
                  </div>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div>
                  <div id="skills" className="row">
                    <Skills skills={JSON_MESSAGE.skills} />
                  </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Content;
