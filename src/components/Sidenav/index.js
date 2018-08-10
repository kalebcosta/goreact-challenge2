import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBody } from './styles';

export default class Sidenav extends Component {
  render() {
    return <NavBody>{this.props.children}</NavBody>;
  }
}

Sidenav.propTypes = {
  children: PropTypes.node.isRequired
};
