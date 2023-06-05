import React from 'react'
import { book } from "../components/BookingData";
import "../css/Booking.css"
 function Booking() {
  return (
    <>
    <div className='container'>
    { 
    book.map((value,key) => {
    return (<div className="innerContainer" key={key} >
     <div className="headerName" >{value.title}</div>
     <div id="pickup" >Pick Up:-  {value.pickup}</div>
     <div id="" >---</div>
     <div id="drop" >Destination:- {value.drop}</div>
     <div id="vechileType" >Vechile:-  {value.vechileType}</div>
     <div id="startTime" >Start;-  {value.startTime}</div>
     <div id="endDateAndTime" >End:-  {value.endDateAndTime}</div>
     <div id="TotalDays" >TotalDays:-  {value.TotalDays}</div>
     <div className="note" >Note:-  {value.Note}</div>
     <div className='totalKm'>Total Km </div><div className='extraKm'>Extra Km</div>
     <div className='totalKmValue'>{value.TotalKm}</div><div className='extraKmValue'>{value.ExtraPerKm}</div>
     <div className='parking'>Parking</div><div className='toll'>Toll</div>
     <div className='parkingVal'>{value.paking}</div><div className='tollVal'>{value.Toll}</div>
     <div className="button">Accept | One Way Trip @ Commission {value.Commission} </div>
     </div>
    );
  } )}
  </div>
  </>
  )
}
export default Booking;
