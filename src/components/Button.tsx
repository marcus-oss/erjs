import { Component } from "react";

interface ButtonProps {
  onClick?: () => any;
  initialiazeClicked?: boolean;
}

interface ButtonState {
  alreadyClicked: boolean;
  timerId?: NodeJS.Timeout;
}

class Button extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);

    this.state = {
      alreadyClicked: !!props.initialiazeClicked,
    };
  }

  componentDidMount(): void {
    const timerId = setInterval(() => {}, 5000);
    this.setState({ timerId });
  }

  componentWillUnmount(): void {
    if (this.state.timerId) clearInterval(this.state.timerId);
  }

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ alreadyClicked: true });
          this.props.onClick?.call([]);
        }}
        disabled={this.state.alreadyClicked}
      ></button>
    );
  }
}

export default Button;

