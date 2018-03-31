import * as React from 'react';

interface Props {
  count: number;
  increment(): void;
  decrement(): void;
}

const Counter: React.SFC<Props> = ({ count, increment, decrement }) => (
  <div>
    {count}
    <div>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  </div>
);

export default Counter;
