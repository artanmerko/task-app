import React, {Component} from 'react';
import uniqid from "uniqid";
import Overview from "./components/Overview";


 class App extends Component {
  constructor(){
    super();
    this.state = {
      task:{
        text:'',
        id: uniqid()
      },
      tasks:[],
    };
  }

  handleChange = (e) =>{
    this.setState({
      task:{
        text: e.target.value,
        id:this.state.task.id,
      },
    });
  };

    onSubmitTask = (e) =>{
      e.preventDefault();
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: {
          text:'',
          id:uniqid(),
        },
      });
    };

  render() {
    const {task, tasks}=this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
           {/* Leave all your code. Just add the onSubmit handler to the form element, or
            as an onClick handler to the submit button, as you prefer */}
          <label htmlFor>Enter task</label>
          <input
          onChange={this.handleChange}
          value={task.text}
          type="text"
          id="taskInput"/>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    )
  }
}

export default App