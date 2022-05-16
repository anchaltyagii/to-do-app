import React from "react";
import Tasks from "./Tasks";
import { Paper } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        return (
          
            <div className="App flex">
               <div className = "maindiv">
                <Paper elevation={3} className="container">
                    <div className="heading">TO-DO</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                    >
                        <input
                            variant="outlined"
                            size="small"
                            placeholder="Add your new task.."
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                        />
                        <AddIcon class ="button" onClick={() => this.handleSubmit()} />   
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                </div>
                                <DeleteIcon
                                    onClick={() => this.handleDelete(task._id)}
                                    color="secondary"
                                />
                            </Paper>
                        ))}
                    </div>
                </Paper> 
                </div>
            </div>
        );
    }
}

export default App;
