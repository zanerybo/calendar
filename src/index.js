import  React, { useState } from "react";
import {render} from "react-dom";
import Calednar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
const ReactCalendar = () =>{
  const [date,setDate] = useState(new Date());
  const onChange = date =>{
    setDate(date)
  }
  return <div>
    <Calednar onChange={onChange} value={date} />
    {console.log(date)}
    {date.toString()}
  </div>
};

render(<ReactCalendar />, document.querySelector("#root"));
