// @flow
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import styles from './Home.css';
import { getAnnotate, getOverlay } from '../utils/ApiWrapper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  setLeft,
  setRight,
  setOverlay,
  setAnnotatePre,
  setAnnotatePost
} from '../actions/images';
import { BounceLoader } from 'react-spinners';

type Props = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { setLeft, setRight, setOverlay, setAnnotatePre, setAnnotatePost },
    dispatch
  );

const Statuses = {
  READY: 'READY',
  PENDING: 'PENDING',
  OVERLAY_DONE: 'OVERLAY_DONE',
  ANNOTATE_DONE: 'ANNOTATE_DONE',
  ERROR: 'ERROR'
};

const loaderCss = {
  display: 'block',
  ' margin-left': 'auto',
  'margin-right': 'auto'
};

class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      preFiles: [],
      postFiles: [],
      status: Statuses.READY,
      noiseReduction: 50
    };
    this.sendRequest = this.sendRequest.bind(this);
    this.onDropPre = this.onDropPre.bind(this);
    this.onDropPost = this.onDropPost.bind(this);
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

  async sendRequest() {
    this.setState({ status: Statuses.PENDING });
    const preFile = await this.readFileDataAsBase64(this.state.preFiles[0]);
    const preFileData = preFile.slice(preFile.indexOf(',') + 1);

    const postFile = await this.readFileDataAsBase64(this.state.postFiles[0]);
    const postFileData = postFile.slice(postFile.indexOf(',') + 1);
    const overlayRes = await getOverlay(
      preFileData,
      postFileData,
      this.state.noiseReduction
    );

    console.log(overlayRes);
    if (overlayRes.response) {
      const images = overlayRes.response.data.images;
      this.props.setLeft(images[0]);
      this.props.setRight(images[1]);
      this.props.setOverlay(images[2]);
      this.setState({ status: Statuses.OVERLAY_DONE });

      const annotateRes = await getAnnotate();
      if (annotateRes.response) {
        const images = annotateRes.response.data.images;
        this.props.setAnnotatePre(images[0]);
        this.props.setAnnotatePost(images[1]);
        this.setState({ status: Statuses.ANNOTATE_DONE });
      } else {
        console.log(annotateRes);
        this.setState({ status: Statuses.ERROR });
      }
    } else {
      console.log(overlayRes.error);
      this.setState({ status: Statuses.ERROR });
    }
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

  handleChange = e => {
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  };

  render() {
    return (
      <div className={styles.dropzones} data-tid="dropzones">
        <h1>UIC Mehta Lab || Image Analyzer</h1>
        <p>Upload Images</p>
        <div className={styles.warning} data-tid="warning">
          <h4>*please only upload PNG or JPEG files*</h4>
        </div>
        {[
          {
            drop: this.onDropPre,
            files: this.state.preFiles,
            name: 'Upload pre image here'
          },
          {
            drop: this.onDropPost,
            files: this.state.postFiles,
            name: 'Upload post image here'
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

        <div className={styles.warning} data-tid="warning">
          <h4>Enter noise reduction factor (0-100, recommended value 50):</h4>
        </div>
        <Input
          name="noiseReduction"
          placeholder="50"
          onChange={this.handleChange}
        />

        <div className={styles.btn} data-tid="btn">
          <Button
            onClick={this.sendRequest}
            disabled={
              !this.state.preFiles.length ||
              !this.state.postFiles.length ||
              this.state.noiseReduction < 0 ||
              this.state.noiseReduction > 100
            }
          >
            Process images
          </Button>
        </div>

        {[Statuses.PENDING, Statuses.OVERLAY_DONE].includes(
          this.state.status
        ) && (
          <>
            <div className={styles.warning} data-tid="warning">
              <h4>Processing images - please wait...</h4>
              <h4>
                {this.state.status === Statuses.PENDING ? '0' : '1'}/2 steps
                complete...
              </h4>
            </div>
            <BounceLoader color="#ffffff" css={loaderCss} />
          </>
        )}

        {this.state.status === Statuses.ANNOTATE_DONE && (
          <>
            <div className={styles.warning} data-tid="warning">
              <h4>Your results are ready - click the button below to view.</h4>
            </div>
            <div className={styles.btn} data-tid="btn">
              <Link to="/Overlayed">
                <Button
                  type="button"
                  className={styles.selected}
                  data-tid="selected"
                >
                  View Results
                </Button>
              </Link>
            </div>
          </>
        )}

        {this.state.status === Statuses.ERROR && (
          <div className={styles.warning} data-tid="warning">
            <h4>An error was encountered.</h4>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
