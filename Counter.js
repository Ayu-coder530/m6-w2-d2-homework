import React from 'react';
import { connect } from 'react-redux';

// Counter component
const Counter = ({ count, increment, decrement }) => (
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

// Map state to props
const mapStateToProps = (state) => ({
  count: state.count,
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

// Connect Counter component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
