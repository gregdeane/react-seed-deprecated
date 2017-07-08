import React from 'react';
import { render } from 'enzyme';

import { About } from '../About';

const getWrapper = props => (
  render(
    <About
      {...props}
      dispatch={() => {}}
    />,
  )
);

const data = {
  name: 'name',
  github: 'github',
};

describe('<About />', () => {
  it('should render default component', () => {
    const wrapper = getWrapper({ about: data });
    const element = wrapper.find('.page-title');

    expect(element.text()).toEqual('About');
    expect(wrapper).toMatchSnapshot();
  });

  it('should return state', () => {
    const state = About.mapStateToProps({ about: data });

    expect(state.about).toEqual({ ...data });
  });
});
