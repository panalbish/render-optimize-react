require('babel-register');
import times from 'lodash.times';
import store from './store';

const N_OF_RUNS = 500;
const start = performance.now();

times(N_OF_RUNS, () => {
  const id = 1;
  const oldRadius = store.getState().targets[id].radius;
  // update the redux store
  store.dispatch({ type: 'UPDATE', id, radius: oldRadius + 0.5 });
});
const end = performance.end();

console.log('sum time', end - start);
console.log('average time', (end - start) / N_OF_RUNS);
