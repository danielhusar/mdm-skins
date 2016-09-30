import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';
import About from '../About';

test('Render', t => {
  const wrapper = mount(
    <About />
  );

  t.is(wrapper.text(), 'About');
});
