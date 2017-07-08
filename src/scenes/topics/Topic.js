import React from 'react';
import PropType from 'prop-types';

const Topic = ({ match }) => (
  <section className="topic">
    <h2>
      {match.params.topicId}
    </h2>
  </section>
);

Topic.propTypes = {
  match: PropType.object,
};

export default Topic;
