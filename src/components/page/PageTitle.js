import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => (
  <h1 className="page-title">
    {title}
  </h1>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
