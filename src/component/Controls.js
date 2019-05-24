import React, { Component } from "react";

class Controls extends Component {
   addEmployee = () => {
     const name = prompt("The name:")
     const salary = parseInt(prompt("The salary:"), 10)
    
    // seems to be working ok we are breaking a very important rule of Mobx: state data should be modified only through actions
    //  this.props.store.employeesList.push({ name, salary });

     //so use actions to change state in the store
      this.props.store.pushEmployee({ name, salary })
   }

   clearList = () => {
     this.props.store.clearList()
    //  this.props.store.employeesList = [] //change outside the store
   }
    render() {
      return (
        <div className="controls">
          <button onClick={this.clearList}>clear table</button>
          <button onClick={this.addEmployee}>add record</button>
        </div>
      );
    }
  }

  export default Controls;