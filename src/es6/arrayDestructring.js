import React from 'react'

export default function arrayDestructring() {
   const vehicles = ['mustang', 'f-150', 'expedition'];
   const [car, truck, suv] = vehicles;
  
   return (
    <div style={{textAlign:'center'}}>
      <h1>Vechiles Details</h1>
      <h3>{car}</h3>
      <h3>{truck}</h3>
      <h3>{suv}</h3>
    </div>
  )

}
