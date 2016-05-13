import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Books from '../Books';

test('Render', t => {
  const wrapper = shallow(
    <Books />
  );

  t.is(wrapper.html(), '<div class="books">Books</div>');
});
