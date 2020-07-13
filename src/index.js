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
    {moment(date).format('DD.MM.YYYY')}
    <input  onInput={OnInputDay} onChange={OnInputDay}/>
    <input  onInput={OnInputMonth} onChange={OnInputMonth}/>
    <input  onInput={OnInputYear} onChange={OnInputYear}/>     
    <input type="submit" value="Установить" onClick={OnClick} onClickCapture={On}/>
  </div>
};

render(<ReactCalendar />, document.querySelector("#root"));
