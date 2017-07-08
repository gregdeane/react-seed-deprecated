import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ to, value, activeClassName, exact }) => (
  <li>
    <NavLink
      exact={exact}
      to={to}
      activeClassName={activeClassName}
    >
      {value}
    </NavLink>
  </li>
);

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  exact: PropTypes.bool,
};

NavigationLink.defaultProps = {
  exact: true,
};

export default NavigationLink;
