import './css/customfonts.css'
import './css/icons.css'
import './css/vectoricons.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './defaults/Header';
import Content from './Content';
import $ from 'jquery';
import './css/shop-item.css'
window.$ = $;

//ReactDOM.render(
//  <Header />,
//  $('#header')[0]
//);

ReactDOM.render(
  <Content />,
  $('#root')[0]
);
