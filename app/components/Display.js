import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';
import styles from './Display.css';
import routes from '../constants/routes';

//tab imports
import { render } from "react-dom";
import Tabs from './Tabs';
require('./styles.css');

import apLabeled1 from './ap-labeled1.png';
import apLabeled2 from './ap-labeled2.png';
import latLabeled1 from './lat-labeled1.png';
import latLabeled2 from './lat-labeled2.png';

import apPre from './ap-pre.png';
import apPost from './ap-post.png';
import apOverlay from './ap-overlay.png';
import latPre from './lat-pre.png';
import latPost from './lat-post.png';
import latOverlay from './lat-overlay.png';

type Props = {};

export default class Display extends Component<Props> {
  props: Props;

//https://alligator.io/react/tabs-component/
//maybe use: https://gist.github.com/diegocasmo/5cd978e9c5695aefca0c6a8a19fa4c69
  // function App() {
  //   return (
  //     <div>
  //       <h1>Tabs Demo</h1>
  //       <Tabs>
  //         <div label="Gator">
  //           See ya later, <em>Alligator</em>!
  //         </div>
  //         <div label="Croc">
  //           After 'while, <em>Crocodile</em>!
  //         </div>
  //         <div label="Sarcosuchus">
  //           Nothing to see here, this tab is <em>extinct</em>!
  //         </div>
  //       </Tabs>
  //     </div>
  //   );
  // }
  //
  // const container = document.createElement('div');
  // document.body.appendChild(container);
  // render(<App />, container)


  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <div className={styles.images} data-tid="images">
          <iframe id="iframe1" src={apPre} height="100%" width="30%"></iframe>
          <iframe id="iframe2" src={apOverlay} height="100%" width="30%"></iframe>
          <iframe id="iframe2" src={apPost} height="100%" width="30%"></iframe>
        </div>
        <div className={styles.images} data-tid="images">
          <img src={apPre} />
          <img src={apOverlay} />
          <img src={apPost} />
        </div>
      </div>
    );
  }
}
