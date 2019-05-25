import React, { Component } from "react";
import Row from "./Row";
import { observer } from "mobx-react";

class Table extends Component {
    render() {
        const { store } = this.props
      return (
          <div>
        <table>
          <thead>
            <tr>
              <td>Type:</td>
              <td>ID:</td>
            </tr>
          </thead>
          <tbody>
              {store.employeesList.map((e, i)=>
                <Row
                    key={i}
                    data={e}
                />
                )}
          </tbody>
          <tfoot>
              <tr>
              <td>TOTAL Time:</td>
              <td>{store.totalSum}</td>
              </tr>
          </tfoot>
        </table>
        <div className="fade">
            You have <u>{store.highEarnersCount} problems </u> that cost more that 800 ms.
        </div>
        </div>
      );
    }
  }
  Table = observer(Table);

  export default Table;