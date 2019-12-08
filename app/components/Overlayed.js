import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageDisplays.css';
import routes from '../constants/routes';
import { connect } from 'react-redux';

type Props = {};

const mapStateToProps = state => ({
  left: state.images.left,
  right: state.images.right,
  overlay: state.images.overlay
});

class Overlayed extends Component<Props> {
  props: Props;

  render() {
    const { left, right, overlay } = this.props;
    return (
      <div className={styles.fullPage}>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.tabs} data-tid="tabs">
          <Link to="/Overlayed">
            <button
              type="button"
              className={styles.selected}
              data-tid="selected"
            >
              Overlayed Images
            </button>
          </Link>
          <Link to="/Labeled">
            <button
              type="button"
              className={styles.unselected}
              data-tid="unselected"
            >
              Labeled Images
            </button>
          </Link>
        </div>
        <div className={styles.iframe} data-tid="iframe">
          {[
            { title: 'Pre image', image: left },
            { title: 'Overlay', image: overlay },
            { title: 'Post image', image: right }
          ].map(info => (
            <div className={styles.overlay}>
              <h4>{info.title}</h4>
              <img
                src={`data:image/png;base64,${info.image}`}
                max-height="80%"
                width="100%"
                alt={info.title}
              />
              <br />
              <a
                download={`${info.title}.EXT`}
                href={`data:image/png;base64,${info.image}`}
              >
                <button>Save</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Overlayed);
