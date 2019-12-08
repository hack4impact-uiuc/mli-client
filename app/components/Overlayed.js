import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';
import styles from './ImageDisplays.css';
import routes from '../constants/routes';
import { connect } from 'react-redux';


// import pre from './pre.png';
// import post from './post.png';
// import overlay from './overlay.png';


type Props = {};
//Component.state.left = redux.state.images.left;
const mapStateToProps = state => ({
  left: state.images.left,
  right: state.images.right,
  overlay: state.images.overlay
});

class Overlayed extends Component<Props> {
  props: Props;

  render() {
    const {left, right, overlay} = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.tabs} data-tid="tabs">
          <Link to="/Overlayed">
            <button type="button" className={styles.selected} data-tid="selected">Overlayed Images</button>
          </Link>
          <Link to="/Labeled">
            <button type="button" className={styles.unselected} data-tid="unselected">Labeled Images</button>
          </Link>
        </div>
        <div className={styles.iframe} data-tid="iframe">
          <Iframe id="iframe1" src={`data:image/png;base64,${left}`} height="75%" width="100%"></Iframe>
          <Iframe id="iframe2" src={`data:image/png;base64,${overlay}`} height="75%" width="100%"></Iframe>
          <Iframe id="iframe2" src={`data:image/png;base64,${right}`} height="75%" width="100%"></Iframe>
        </div>


      </div>
    );
  }
}

export default connect(mapStateToProps)(Overlayed);

// {this.props.left &&
//   [this.props.left, this.props.overlay, this.props.right].map(image => (
//     <img src={`data:image/png;base64,${image}`} />
//   ))}