// @flow
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styles from './Home.css';
import { getOverlay } from '../utils/ApiWrapper';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      files2: [],
      files3: [],
      files4: [],
      left: null,
      right: null,
      overlay: null
    };
    this.testRequest = this.testRequest.bind(this);
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  onDrop2(files2) {
    this.setState({
      files2
    });
  }

  onDrop3(files3) {
    this.setState({
      files3
    });
  }

  onDrop4(files4) {
    this.setState({
      files4
    });
  }

  async testRequest() {
    const file1 = await this.readFileDataAsBase64(this.state.files[0]);
    const file1Data = file1.slice(file1.indexOf(',') + 1);

    const file2 = await this.readFileDataAsBase64(this.state.files2[0]);
    const file2Data = file2.slice(file2.indexOf(',') + 1);
    const res = await getOverlay(file1Data, file2Data);

    const images = res.response.data.images;
    this.setState({ left: images[0], right: images[1], overlay: images[2] });
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
      <div>
        <div className={styles.dropzones} data-tid="dropzones">
          <h1>UIC Mehta Lab || Image Analyzer</h1>
          <p>Upload AP View Images</p>
          <Dropzone onDrop={this.onDrop.bind(this)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {this.state.files.length > 0 ? (
                    <h4>{`Uploaded ${this.state.files[0].name}. Click to change.`}</h4>
                  ) : (
                    <Button>AP Image 1</Button>
                  )}
                </div>
              </section>
            )}
          </Dropzone>

          <Dropzone onDrop={this.onDrop2.bind(this)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {this.state.files2.length > 0 ? (
                    <h4>{`Uploaded ${this.state.files2[0].name}. Click to change.`}</h4>
                  ) : (
                    <Button>AP Image 2</Button>
                  )}
                </div>
              </section>
            )}
          </Dropzone>

          <p>Upload Lateral View Images</p>
          <Dropzone onDrop={this.onDrop3.bind(this)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {this.state.files3.length > 0 ? (
                    <h4>{`Uploaded ${this.state.files3[0].name}. Click to change.`}</h4>
                  ) : (
                    <Button>LAT Image 1</Button>
                  )}
                </div>
              </section>
            )}
          </Dropzone>

          <Dropzone onDrop={this.onDrop4.bind(this)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {this.state.files4.length > 0 ? (
                    <h4>{`Uploaded ${this.state.files4[0].name}. Click to change.`}</h4>
                  ) : (
                    <Button>LAT Image 2</Button>
                  )}
                </div>
              </section>
            )}
          </Dropzone>
        </div>

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
        {this.state.left &&
          [this.state.left, this.state.overlay, this.state.right].map(image => (
            <img src={`data:image/png;base64,${image}`} />
          ))}
      </div>
    );
  }
}
