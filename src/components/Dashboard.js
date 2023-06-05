import React from 'react';
import  '../css/Dashboard.css';
import profile from '../images/carImage.jpg';
import viewIcon from '../images/viewIcon.jpg';

export default function Dashboard() {
  return (
    <>
      <div className='common newBooking'>
      <div className='car'><img src={profile} alt="react logo" style={{ width: '150px',marginLeft:'120px',height:"120px",marginTop:"10px"}}/></div>
      <div className='content'>21 <br /> New Booking</div>
      <div className='line'></div>
      <div><img src={viewIcon} alt="react logo" style={{ width: '20px',marginLeft:'0px',height:"20px",marginTop:"0px"}}/> View All</div>
      </div>
      <div className='common acceptedBooking'>
      <div className='car'><img src={profile} alt="react logo" style={{ width: '150px',marginLeft:'120px',height:"120px",marginTop:"10px"}}/></div>
      <div className='content'>0 <br /> Accepted Booking</div>
      <div className='line'></div>
      <div className='viewAll'><img src={viewIcon} alt="react logo" style={{ width: '20px',marginLeft:'10px',height:"20px",marginTop:"0px"}}/>View All</div>
      </div>
      <div className='common postBooking'>
      <div className='car'><img src={profile} alt="react logo" style={{ width: '150px',marginLeft:'120px',height:"120px",marginTop:"10px"}}/></div>
      <div className='content'>0 <br /> Post Booking</div>
      <div className='line'></div>
      <div><img src={viewIcon} alt="react logo" style={{ width: '20px',marginLeft:'10px',height:"20px",marginTop:"0px"}}/>View All</div>
      </div>
      <div className='common activeBooking'>
      <div className='car'><img src={profile} alt="react logo" style={{ width: '150px',marginLeft:'120px' ,height:"120px",marginTop:"10px"}}/></div>
      <div className='content'>0 <br /> Active Booking</div>
      <div className='line'></div>
      <div><img src={viewIcon} alt="react logo" style={{ width: '20px',marginLeft:'10px',height:"20px",marginTop:"0px"}}/>View All</div>
      </div>
      <div className='common completedBooking'>
      <div className='car'><img src={profile} alt="react logo" style={{ width: '150px',marginLeft:'120px',height:"120px",marginTop:"10px"}}/></div>
      <div className='content'>0 <br /> Completed Booking</div>
      <div className='line'></div>
      <div><img src={viewIcon} alt="react logo" style={{ width: '20px',marginLeft:'10px',height:"20px",marginTop:"0px"}}/>View All</div>
      </div>
      <div className='common comingSoonBooking'>
      <div className='car'><img src={profile} alt="react logo" style={{ width: '150px',marginLeft:'120px' ,height:"120px",marginTop:"10px"}}/></div>
      <div className='content'>Coming Soon</div>
      <div className='line'></div>
      <div><img src={viewIcon} alt="react logo" style={{ width: '20px',marginLeft:'10px',height:"20px",marginTop:"0px"}}/>View All</div></div>
    </>
  )
}
