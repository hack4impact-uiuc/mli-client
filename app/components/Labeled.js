import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageDisplays.css';
import routes from '../constants/routes';
import { connect } from 'react-redux';

type Props = {};

const mapStateToProps = state => ({
  labelPre: state.images.annotatePre,
  labelPost: state.images.annotatePost
});

class Labeled extends Component<Props> {
  props: Props;

  render() {
    const { labelPre, labelPost } = this.props;
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
              Labeled Images
            </button>
          </Link>
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
      </div>
    );
  }
}

export default connect(mapStateToProps)(Labeled);
