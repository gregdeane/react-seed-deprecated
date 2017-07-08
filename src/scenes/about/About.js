import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';

import Page from 'components/page/Page';
import { loadAbout } from './reducers/about-reducer';

import './about.scss';

export class About extends Component {
  static propTypes = {
    about: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  };

  static mapStateToProps(state) {
    return {
      about: state.about,
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(loadAbout());
  }

  render() {
    const { about } = this.props;

    return (
      <Page
        documentTitle="About"
        title="About"
      >
        <section className="about">
          <p>{about.name}</p>
          <p>{about.html_url}</p>
          <Button>Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="danger">Danger</Button>
        </section>
      </Page>
    );
  }
}

export default withRouter(connect(
  About.mapStateToProps,
)(About));
