import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageDisplays.css';
import routes from '../constants/routes';
import { connect } from 'react-redux';

type Props = {};

const mapStateToProps = state => ({
  labelPre: state.images.annotatePre,
  labelPost: state.images.annotatePost,
  messages: state.message
});

class Labeled extends Component<Props> {
  props: Props;

  render() {
    const { labelPre, labelPost, messages } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.tabs} data-tid="tabs">
          <Link to="/Overlayed">
            <button
              type="button"
              className={styles.unselected}
              data-tid="unselected"
            >
              Overlayed Images
            </button>
          </Link>
          <Link to="/Labeled">
            <button
              type="button"
              className={styles.selected}
              data-tid="selected"
            >
              <u>Labeled Images</u>
            </button>
          </Link>
        </div>
        <div className={styles.centered} data-tid="centered">
          <h4>
            The output contains the original image annotated with lines
            indicating the area containing the rod and dots indicating the
            screws. In addition, the output may contain text information
            indicating the orientation degree of the rod/screw region in both
            the pre and post image as well as the approximate movement of the
            rod to the left or right.
          </h4>
          <h4>
            However, this function does not always work, depending on how
            well-conditioned the input images are. If you cannot understand the
            results, try cropping the input images to show only the regions you
            want to focus on and process them again.
          </h4>
        </div>
        <div className={styles.iframe} data-tid="iframe">
          {[
            { title: 'Pre image', image: labelPre },
            { title: 'Post image', image: labelPost }
          ].map(info => (
            <div className={styles.overlay}>
              <h4>{info.title}</h4>
              <img
                src={`data:image/png;base64,${info.image}`}
                width="100%"
                alt={info.title}
              />
              <a
                download={`${info.title}.EXT`}
                href={`data:image/png;base64,${info.image}`}
              >
                <button>Save</button>
              </a>
            </div>
          ))}
        </div>
        {messages && (
          <div className={styles.centered} data-tid="centered">
            <h4>Logs:</h4>
            <ul>
              {messages
                .filter(message => message !== null)
                .map(message => (
                  <li>{message}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Labeled);
