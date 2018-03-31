import * as React from 'react';
import Counter from './Counter';

interface Props {}
interface State {
  count: number;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement(): void {
    const count = this.state.count - 1;
    this.setState({ count });
  }

  increment(): void {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  render(): JSX.Element {
    return (
      <Counter
        count={this.state.count}
        decrement={this.decrement}
        increment={this.increment}
      />
    );
  }
}

export default App;
