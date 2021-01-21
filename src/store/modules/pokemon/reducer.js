import produce from 'immer';

const INITIAL_STATE = {
  maxItemsStack: 6,
  stack: [],
  ashState: 0,
}

const pokemon = (state = INITIAL_STATE, action) => {
  return produce(state, draft => { return draft; })
}

export default pokemon;
