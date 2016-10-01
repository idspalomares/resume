import React, { Component } from 'react';
import { Row, Col, Popover } from 'react-bootstrap';
import Moment from 'moment';
import './timeline.css'
import $ from 'jquery';
window.$ = $;


class Timeline extends Component {

  state = {
    jobs : this.props.jobs,
    timelineCount: 0
  }

  componentDidMount() {
    var my_posts = $("[rel=tooltip]");

  	var size = $(window).width();
  	for(var i=0;i<my_posts.length;i++){
  		var the_post = $(my_posts[i]);

  		if(the_post.hasClass('invert') && size >=767 ){
  			the_post.tooltip({ placement: 'left'});
  			the_post.css("cursor","pointer");
  		}else{
  			the_post.tooltip({ placement: 'rigth'});
  			the_post.css("cursor","pointer");
  		}
  	}
  }

  getDateRange(job) {
    var start = Moment([job.dateStartedYear, job.dateStartedMonth, 1]);
    var end = Moment([job.dateEndedYear, job.dateEndedMonth, 1]);

    if (job.isEmployed === true) {
      return 'Present'
    } else {
      var total = Moment(end).diff(start, 'months', true);
      var years = total / 12;
      var roundedYears = Math.round(years * 10) / 10;
      var yearAbs = roundedYears.toFixed(0);
      var months = '';
      var yearString = 'year';
      var monthString = 'month'

      if (roundedYears > yearAbs) {
        var decimalValue = (roundedYears + "").split(".")[1];

        if (decimalValue > 1) {
          monthString = monthString + 's';
        }

        months = 'and ' + decimalValue + ' ' + monthString;
      }

      if (yearAbs > 1) {
        yearString = yearString + 's';
      }

      return yearAbs + ' ' + yearString + ' ' + months;
    }

  }

  getMonth(job) {
    var en = Moment().locale('en');
    var first = en.localeData().months(Moment([job.dateStartedYear, --job.dateStartedMonth])) + ' ' + job.dateStartedYear;
    var end = job.isEmployed == false ? en.localeData().months(Moment([job.dateEndedYear, --job.dateEndedMonth])) + ' ' + job.dateEndedYear : 'Present'
    return first + ' to ' + end;
  }

  render() {
    return (
      <div className="container">
          <ul className="timeline">
            {
              this.state.jobs.map(function(job, index){
                this.state.timelineCount++;
                return (
                  <li className={this.state.timelineCount % 2 == 0 ? 'timeline-inverted' : ''}>
                    <div className="timeline-badge">

                      <Row>
                        <Col md={6}><i className="glyphicon glyphicon-map-marker"></i></Col>
                        <Col md={6} className="designation-info">
                          <Popover placement={this.state.timelineCount % 2 == 0 ? 'left' : 'right'}
                            className={this.state.timelineCount % 2 == 0 ? 'timeline-toast-left' : 'timeline-toast-right'}
                            title={ <span className="company-location">{job.companyLocation}</span> }>
                              <p>{ this.getMonth(job) } ({ this.getDateRange(job) })</p>
                          </Popover>
                        </Col>
                      </Row>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <div className="timeline-company-image">
                          <img src={job.img_src}/>
                        </div>
                        <div className="timeline-company-name">
                          {job.companyName}
                        </div>
                        <div className="timeline-position">
                          <i className="glyphicon glyphicon-hand-right"></i> {job.position}
                        </div>
                      </div>
                      <hr></hr>
                      <div className="timeline-body">
                        <div className="timeline-body-text" dangerouslySetInnerHTML={{__html: job.description}}>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              }.bind(this))
            }
          </ul>
      </div>
    )
  }

}

export default Timeline;
