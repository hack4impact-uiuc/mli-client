import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';
import styles from './ImageDisplays.css';
import routes from '../constants/routes';

import pre from './pre.png';
import post from './post.png';
import overlay from './overlay.png';

type Props = {};

export default class Overlayed extends Component<Props> {
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
          <Link to="/Labeled">
            <button type="button" className={styles.unselected} data-tid="unselected">Labeled Images</button>
          </Link>
          <Link to="/Overlayed">
            <button type="button" className={styles.selected} data-tid="selected">Overlayed Images</button>
          </Link>
        </div>
        <div className={styles.iframe} data-tid="iframe">
          <Iframe id="iframe1" src={pre} height="75%" width="100%"></Iframe>
          <Iframe id="iframe2" src={overlay} height="75%" width="100%"></Iframe>
          <Iframe id="iframe2" src={post} height="75%" width="100%"></Iframe>
        </div>


      </div>
    );
  }
}
