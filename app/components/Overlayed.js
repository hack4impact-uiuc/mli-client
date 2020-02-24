import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageDisplays.css';
import routes from '../constants/routes';
import { connect } from 'react-redux';
import './Home.css';

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
        <div className={styles.centered} data-tid="centered">
          <h4>
            The pre and post images are colored green and magenta, respectively,
            so that when they are overlaid the resulting pixel is white.
            Additionally, the pre image is cropped and warped so that its
            overlay most closely matches the post image.
          </h4>
          <h4>
            As such, white pixels in the overlapped image indicate an overlap of
            the pre and post image, while a colored pixel represents only the
            presence of the correspondingly-colored image.
          </h4>
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
                alt={info.title}
                className={styles.overlayImg}
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
