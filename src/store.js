import { createStore } from 'redux';
import times from 'lodash.times';
import findIndex from 'lodash.findindex';
import Konva from 'konva';

const generateTargets = () => {
  const height = window ? window.innerHeight : 800;
  const width = window ? window.innerWidth : 800;
  return (
  times(1000, i => (
    {
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 2 + (Math.random() * 5),
      color: Konva.Util.getRandomColor()
    })
  )
  );
};

const appReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    const i = findIndex(state.targets, t => t.id === action.id);
    const updatedTarget = {
      ...state.targets[i],
      radius: action.radius
    };

    return {
      targets: [
        ...state.targets.slice(0, i),
        updatedTarget,
        ...state.targets.slice(i + 1)
      ]
    };
  }
  return state;
};

const initialState = {
  targets: generateTargets()
};

const store = createStore(appReducer, initialState);

export default store;
