import  React, { useState }  from "react";
import { useRef } from "react";
import {render} from "react-dom";
import Calednar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import * as moment from "moment"
import ReactTable from 'react-table';
const ReactCalendar = () =>{
  const [ActionDate,setDate] = useState(new Date());
  const onChange = ActionDate =>{
    setDate(ActionDate)    
  }
  const columns = [
    {
        Header: "ID",
        accessor: "id"
    },
    {
        Header: "Name",
        accessor: "name"
    }
];
  function onClickDay () {
    const rendering =(
      <div>
        <table>
          <tr>
            <td>
              <ReactCalendar/>
            </td>
            <td>
              <ReactTable
                data={ActionDate}
                columns={columns}
                defaultPageSize={10}
              />
            </td>
          </tr>
        </table>
      </div>
    )
   render(rendering,document.querySelector("#root"))
  }
  
  return <div>
    <Calednar id="2" onChange={onChange} onClickDay={onClickDay} value={ActionDate} selectRange  />
    {console.log(ActionDate)}
  </div>  
};
render(<ReactCalendar />, document.querySelector("#root"));



