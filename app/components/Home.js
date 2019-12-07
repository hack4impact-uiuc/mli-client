// @flow
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styles from './Home.css';
import { getOverlay } from '../utils/ApiWrapper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLeft, setRight, setOverlay } from '../actions/images';

type Props = {};

const mapStateToProps = state => ({
  left: state.images.left,
  right: state.images.right,
  overlay: state.images.overlay
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setLeft, setRight, setOverlay }, dispatch);

class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      preFiles: [],
      postFiles: [],
      waiting: false
    };
    this.onDropPre = this.onDropPre.bind(this);
    this.onDropPost = this.onDropPost.bind(this);
    this.testRequest = this.testRequest.bind(this);
  }

  onDropPre(preFiles) {
    this.setState({
      preFiles
    });
  }

  onDropPost(postFiles) {
    this.setState({
      postFiles
    });
  }

  async testRequest() {
    this.setState({ waiting: true });
    const preFile = await this.readFileDataAsBase64(this.state.preFiles[0]);
    const preFileData = preFile.slice(preFile.indexOf(',') + 1);

    const postFile = await this.readFileDataAsBase64(this.state.postFiles[0]);
    const postFileData = postFile.slice(postFile.indexOf(',') + 1);
    const res = await getOverlay(preFileData, postFileData);

    const images = res.response.data.images;
    this.props.setLeft(images[0]);
    this.props.setRight(images[1]);
    this.props.setOverlay(images[2]);
    this.setState({ waiting: false });
  }

  readFileDataAsBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = event => {
        resolve(event.target.result);
      };

      reader.onerror = err => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  }

  render() {
    return (
      <div className={styles.dropzones} data-tid="dropzones">
        <h1>UIC Mehta Lab || Image Analyzer</h1>
        <p>Upload Images</p>
        {[
          {
            drop: this.onDropPre,
            files: this.state.preFiles,
            name: 'Pre image'
          },
          {
            drop: this.onDropPost,
            files: this.state.postFiles,
            name: 'Post image'
          }
        ].map(info => (
          <>
            <Dropzone onDrop={info.drop}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {info.files.length > 0 ? (
                      <h4>{`Uploaded ${info.files[0].name}. Click to change.`}</h4>
                    ) : (
                      <Button>{info.name}</Button>
                    )}
                  </div>
                </section>
              )}
            </Dropzone>
            <br />
          </>
        ))}

        <div className={styles.btn} data-tid="btn">
          <Link to="/Overlayed">
            <button
              type="button"
              className={styles.selected}
              data-tid="selected"
            >
              Compare Images
            </button>
          </Link>
        </div>

        <div className={styles.warning} data-tid="warning">
          <h4>*please only upload png, jpeg, or jpg images*</h4>
        </div>

        <Button onClick={this.testRequest}>Test request</Button>

        {this.state.waiting && <h4>Waiting...</h4>}
        {this.props.left &&
          [this.props.left, this.props.overlay, this.props.right].map(image => (
            <img src={`data:image/png;base64,${image}`} />
          ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
