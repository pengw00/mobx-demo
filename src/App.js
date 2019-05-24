import React from 'react';
import Controls from "./component/Table";
import Table from "./component/Controls";

import {configure, action} from "mobx";

import { decorate, observable, computed } from "mobx";

configure({enforceActions: true})

class Store {
  employeesList = [
    { name: "John Doe", salary: 150 },
    { name: "Richard Roe", salary: 225 },
  ]
  clearList(){
    this.employeesList = []
  }
  pushEmployee(e) {
    this.employeesList.push(e)
  }

  get totalSum(){
    let sum = 0
    this.employeesList.map(e => sum = sum + e.salary)
    return sum
  }

  get highEarnersCount(){
    return this.employeesList.filter(e => e.salary > 500).length;
  }
  
}

decorate(Store, {
  employeesList: observable,
  clearList: action,
  pushEmployee: action,
  totalSum: computed
});


const appStore = new Store()

function App() {
  return (
    <div>
      <h1>Mobx Table</h1>
        <Controls store={appStore}/>
        <Table store={appStore}/>
    </div>
  );
}

export default App;
