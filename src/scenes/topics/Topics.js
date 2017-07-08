import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

import Page from 'components/page/Page';
import TopicRoutes from './TopicRoutes';

import './topics.scss';

const Topics = ({ match }) => (
  <Page
    documentTitle="Topics"
    title="Topics"
  >
    <section className="topics">
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
      </ul>

      <TopicRoutes match={match} />
    </section>
  </Page>
);

Topics.propTypes = {
  match: PropType.object,
};

export default Topics;
