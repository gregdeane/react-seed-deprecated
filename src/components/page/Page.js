import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import PageTitle from './PageTitle';

const Page = ({ documentTitle, title, children }) => (
  <DocumentTitle title={documentTitle}>
    <main className="page">
      {
        title &&
          <PageTitle title={title} />
      }
      <div className="page__content">
        {children}
      </div>
    </main>
  </DocumentTitle>
);

Page.propTypes = {
  documentTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Page;
