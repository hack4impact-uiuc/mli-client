import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';
import styles from './ImageDisplays.css';
import routes from '../constants/routes';

import apPre from './ap-pre.png';
import apPost from './ap-post.png';
import apOverlay from './ap-overlay.png';
import latPre from './lat-pre.png';
import latPost from './lat-post.png';
import latOverlay from './lat-overlay.png';

//tests
import test1 from './test1.png';
import test2 from './test2.png';
import test3 from './test3.png';

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
          <iframe id="iframe1" src={apPre} height="75%" width="100%"></iframe>
          <iframe id="iframe2" src={apOverlay} height="75%" width="100%"></iframe>
          <iframe id="iframe2" src={apPost} height="75%" width="100%"></iframe>
        </div>


      </div>
    );
  }
}
