import  React, { useState }  from "react";
import {render} from "react-dom";
import Calednar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ReactCalendar = () =>{
  const [ActionDate,setDate] = useState(new Date());
  const onChange = ActionDate =>{
    setDate(ActionDate)    
  }
 
  function onClickDay () {
    function createData(action,time) {
      return {  action, time};
    }
    
    const rows = [
      createData('Встреча', '8:30'),
      createData('Встреча', '9:30'),
      createData('Встреча', '10:30'),
      createData('Встреча', '11:30'),
      createData('Встреча', '12:30'),
    ];
    const rendering =(
      <div>
         <table>
          <tr>
            <td>
              <ReactCalendar/>
            </td>
            <td> 
              <TableContainer component={Paper}>
      <Table aria-label="simple table">
      
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Время</TableCell>
            <TableCell align="right">Событие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.time}>
              <TableCell><input type="image"  src="https://img.icons8.com/metro/15/000000/edit.png"></input></TableCell>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
            
          ))}
          <input type='image'  src="https://img.icons8.com/dusk/32/000000/add--v1.png"></input>
        </TableBody>
      </Table>
    </TableContainer>
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



