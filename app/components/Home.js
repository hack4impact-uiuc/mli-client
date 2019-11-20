// @flow
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      files2: [],
      files3: [],
      files4: []
    };
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

  //<Dropzone onDrop={this.onDrop.bind(this)}>
  //<Dropzone onDrop={(file: any) => this.handleFileSelect('content1', file)} name="content1" className="dropzones" multiple={false} accept={allowedExtensions}>
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h4>Please only upload the following types: .png, .jpeg, jpg, .tiff</h4>
        <h3>Upload AP View Images</h3>
        <Dropzone onDrop={this.onDrop.bind(this)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {this.state.files.length > 0 ? (
                  <p>{`Uploaded ${this.state.files[0].name}. Click to change.`}</p>
                ) : (
                  <Button>Add AP Image 1</Button>
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
                  <p>{`Uploaded ${this.state.files2[0].name}. Click to change.`}</p>
                ) : (
                  <Button>Add AP Image 2</Button>
                )}
              </div>
            </section>
          )}
        </Dropzone>

        <h3>Upload Lateral View Images</h3>
        <Dropzone onDrop={this.onDrop3.bind(this)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {this.state.files3.length > 0 ? (
                  <p>{`Uploaded ${this.state.files3[0].name}. Click to change.`}</p>
                ) : (
                  <Button>Add Lat Image 2</Button>
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
                  <p>{`Uploaded ${this.state.files4[0].name}. Click to change.`}</p>
                ) : (
                  <Button>Add Lat Image 2</Button>
                )}
              </div>
            </section>
          )}
        </Dropzone>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6me2KcJpYHsSB1Rn-8pNo5s8PBymQLoNxllnrPiEUGRL4bnem" />
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
