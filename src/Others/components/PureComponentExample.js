import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        { title: "excercise" },
        { title: "cooking" },
        { title: "Reacting" }
      ],
      name: "Salma"
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((oldState) => {
        return { taskList: [...oldState.taskList] };
      });

      // this.setState({ name: "Salma" }); // shallow comparison
    }, 1000);
  }
  render() {
    console.log("taskList render called");

    return (
      // <div>
      //   {this.state.taskList.map((task, i) => {
      //     return <Task key={i} title={task.title} />;
      //   })}
      // </div>
      <TaskCom name={this.state.name} />
    );
  }
}

class Task extends React.PureComponent {
  render() {
    console.log("task added");
    return <div>{this.props.title}</div>;
  }
}

class TaskCom extends React.PureComponent {
  render() {
    console.log("task added");
    return <div>{this.props.name}</div>;
  }
}
export default Test;
