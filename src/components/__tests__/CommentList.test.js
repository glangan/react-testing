import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../../components/CommentList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  const initialState = { comments: ['comment 1', 'comment 2'] };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates on LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows a text for each component', () => {
  expect(wrapped.render().text()).toContain('comment 1');
});
