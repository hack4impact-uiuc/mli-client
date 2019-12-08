import React, { Component } from 'react';
import Labeled from '../components/Labeled';

type Props = {};

export default class LabeledPage extends Component<Props> {
  props: Props;

  render() {
    return <Labeled />;
  }
}
