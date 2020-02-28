import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

describe('save comment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has correct payload', () => {
    const action = saveComment('new comment');
    expect(action.payload).toEqual('new comment');
  });
});
