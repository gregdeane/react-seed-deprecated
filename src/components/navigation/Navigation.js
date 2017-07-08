import React from 'react';

import NavigationLink from './NavigationLink';

const navLinks = [
  {
    key: 'home',
    value: 'Home',
    to: '/',
  },
  {
    key: 'about',
    value: 'About',
    to: '/about',
  },
  {
    key: 'topics',
    value: 'Topics',
    to: '/topics',
  },
];

const Navigation = () => (
  <ul className="navigation">
    {
      navLinks.map(link => (
        <NavigationLink
          key={link.key}
          to={link.to}
          value={link.value}
          activeClassName="navigation--selected"
        />
      ))
    }
  </ul>
);

export default Navigation;
