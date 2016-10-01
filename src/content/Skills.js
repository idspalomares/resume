import React, { Component } from 'react';
import { Panel, Row, Col, ProgressBar } from 'react-bootstrap';
import $ from 'jquery';
import './skills.css'
window.$ = $;

class Skills extends React.Component {

  state = {
    open : []
  };

  constructor(props) {
    super(props)
  }

  changeCollapseState(index, value) {
    var open = this.state.open;
    open[index] = value;
    this.setState({open:open});
  }

  render() {
    return(
      <Row>
        {
          this.props.skills.map( function(skill, index) {
            this.state.open.push(false)
            return (
              <div>
                <Panel key={skill._id} collapsible expanded={this.state.open[index]}
                  header={ <TerminalHeader title={skill.mainCategory} onMinimize={ () => this.changeCollapseState(index, false)}
                  onMaximize={() => this.changeCollapseState(index, true)}/> } bsStyle="primary">
                  <SkillCategories data={skill.items} />
                </Panel>
              </div>
            )
          }.bind(this))
        }
      </Row>
    );
  }

}

class TerminalHeader extends Component {

  render() {
    return (
      <Row>
        <Col md={2}>
          <Col md={4}>
            <div className="vit vi-close"></div>
          </Col>
          <Col md={4}>
            <div className="vit vi-minimize" onClick={ () => this.props.onMinimize() }></div>
          </Col>
          <Col md={4}>
            <div className="vit vi-maximize" onClick={ () => this.props.onMaximize() }></div>
          </Col>
        </Col>
        <Col md={10}>
          { this.props.title }
        </Col>
      </Row>
    );
  }
}

class SkillCategories extends Component {
  render() {
    return (
      <Row>
        {
          this.props.data.map(function(item) {
            return (
              <div className="skill-category-container" key={item._id}>
                <div className="row category-header">
                  <h4>{"> " + item.category + "_"}</h4>
                </div>
                <div className="row">
                  <SkillItems data={item.items} />
                </div>
              </div>
            )
          })
        }
      </Row>
    )
  }
};

class SkillItems extends Component {

  render() {
    return (
      <div>
        {
          this.props.data.map(function(item) {
            return (
              <div className="progress-bar-container">
                <Col md={5} className="skill-item-title">{item.name}</Col>
                <Col md={7} className="skill-progress-bar">
                  <ProgressBar className="skill-progress" now={item.rate * 20}/>
                </Col>
              </div>
            )
          })
        }
      </div>
    )
  }

};

export default Skills;
