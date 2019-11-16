// @flow
// lakjdfslk
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';


type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Dropzone onDrop={this.onDrop.bind(this)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {this.state.files.length > 0 ? (
                  <p>{`File uploaded ${this.state.files[0].name}`}</p>
                ) : (
                  <Button>Upload</Button>
                )}
              </div>
            </section>
          )}
        </Dropzone>
        <h3>Upload Lateral View Images</h3>
        <h3>Upload AP View Images</h3>
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6me2KcJpYHsSB1Rn-8pNo5s8PBymQLoNxllnrPiEUGRL4bnem"/>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
