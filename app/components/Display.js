import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Display.css';
import routes from '../constants/routes';

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

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
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
