import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Topic from './Topic';

const TopicRoutes = ({ match }) => (
  <section>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => (
        <h3>Please select a topic.</h3>
      )}
    />
  </section>
);

TopicRoutes.propTypes = {
  match: PropTypes.object.isRequired,
};

export default TopicRoutes;
