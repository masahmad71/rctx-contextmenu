import React from 'react';
import { ExampleOne, ExampleTwo, ExampleThree, ExampleFour, ExampleFive } from 'example/src/components';
import forkRibbon from './assets/images/fork-ribbon.png';

import './style.scss';

const Demo = () => {
  return (
    <div className="wrapper" id="wrapper">
      <div className="header header--flex header--vcenter header--hbetween">
        <div className="container">
          <h1 className="header__logo">RCTXContextmenu</h1>
        </div>
      </div>
      <a href="https://github.com/reachtokish/rctx-contextmenu" className="ribbon"><img src={forkRibbon} alt="ribbon"  /></a>
      <div className="container">
        <div className="content-wrapper">
          <div className="menu">
            <ul className="menu__list">
              <li className="menu__listitem menu__listitem--active">
                <a href="#example1" className="menu__trigger">Example 1</a>
              </li>
              <li className="menu__listitem menu__listitem--active">
                <a href="#example2" className="menu__trigger">Example 2</a>
              </li>
              <li className="menu__listitem menu__listitem--active">
                <a href="#example3" className="menu__trigger">Example 3</a>
              </li>
              <li className="menu__listitem menu__listitem--active">
                <a href="#example4" className="menu__trigger">Example 4</a>
              </li>
              <li className="menu__listitem menu__listitem--active">
                <a href="#example5" className="menu__trigger">Example 5</a>
              </li>
            </ul>
          </div>
          <div className="content">

            <div className="content__section">
              <ExampleOne />
            </div>

            <div className="content__section">
              <ExampleTwo />
            </div>

            <div className="content__section">
              <ExampleThree />
            </div>

            <div className="content__section">
              <ExampleFour />
            </div>

            <div className="content__section">
              <ExampleFive />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Demo;
