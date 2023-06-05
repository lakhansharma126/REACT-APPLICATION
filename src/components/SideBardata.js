import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BalanceIcon from '@mui/icons-material/Balance';
import PaymentIcon from '@mui/icons-material/Payment';
import CarRentalIcon from '@mui/icons-material/CarRental';
import Person2Icon from '@mui/icons-material/Person2';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WalletIcon from '@mui/icons-material/Wallet';
import PolicyIcon from '@mui/icons-material/Policy';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';
export const SideBarData = [
    {
 
        title:"DashBoard",
        icon:<DashboardIcon />,
        link:"/dasboard",
        cName:"row"
    
       }
    ,

    {
      title:"Bookings",
      icon:<BookmarkIcon />,
      link:"/booking",
      cName:"row"
  
     },

    {
 
    title:"Booking Point List",
    icon:<BookmarkIcon />,
    link:"/action",
    cName:"row"

   },

   {
 
    title:"Registration",
    icon:<BalanceIcon />,
    link:"/rform",
    cName:"row"

   }
,
   
{
    title:"Payment History",
    icon:<PaymentIcon />,
    link:"/payment",
    cName:"row"

   },

   {
 
    title:"Car",
    icon:<CarRentalIcon />,
    link:"/car",
    cName:"row"
   }
   ,
   {
 
    title:"Drivers",
    icon:<Person2Icon />,
    link:"/driver",
    cName:"row"
   }
   ,
   {
 
    title:"Post Bookings",
    icon:<AddBoxIcon />,
    link:"/postBooking",
    cName:"row"
   }
   ,
   {
 
    title:"Wallet Transaction",
    icon:<WalletIcon />,
    link:"/wallet",
    cName:"row"
   }
,
{
    title:"Terms & Conditions",
    icon:<InfoIcon />,
    link:"/term",
    cName:"row"
   },
   {
    title:"Refund Policy",
    icon:<PolicyIcon />,
    link:"/refund",
    cName:"row"
   }
,
   {
    title:"Help & Support",
    icon:<ContactSupportIcon />,
    link:"/help",
    cName:"row"
   }
   ,
   {
    title:"Logout",
    icon:<LogoutIcon />,
    link:"/logout",
    cName:"row"
   }
]
