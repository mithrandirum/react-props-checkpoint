import React from 'react'


export default function Profile({FullName,Bio,Profession,children,handleName}) {

    return (
        <div style ={{ color : 'blue', marginLeft : 250,
        marginRight : 250 , border : "5px solid black", padding : 10, marginTop : 90}}>
        <h1  style = {{color : 'brown'}}>Full Name : {FullName } </h1>
        <p  style = {{fontFamily : 'sans-serif'}}> <b>Biography :</b> {Bio}</p>
        <p><b>Profession :</b> {Profession}</p>
        <span>{children}</span>
        <button onClick={() => handleName(FullName)} style = {{marginLeft : 30, padding : 10, backgroundColor : 'black', color : 'white'}}>
        Pandora's box
     </button>
        </div>
    )
   
   
}


