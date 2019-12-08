import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';
import styles from './ImageDisplays.css';
import routes from '../constants/routes';

import labeled1 from './labeled1.png';
import labeled2 from './labeled2.png';

type Props = {};

export default class Labeled extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.tabs} data-tid="tabs">
          <Link to="/Overlayed">
            <button type="button" className={styles.unselected} data-tid="unselected">Overlayed Images</button>
          </Link>
          <Link to="/Labeled">
            <button type="button" className={styles.selected} data-tid="selected">Labeled Images</button>
          </Link>
        </div>
        <div className={styles.iframe} data-tid="iframe">
          <Iframe id="iframe1" src={labeled1} height="75%" width="100%"></Iframe>
          <Iframe id="iframe2" src={labeled2} height="75%" width="100%"></Iframe>
        </div>


      </div>
    );
  }
}