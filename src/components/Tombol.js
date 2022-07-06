import React from 'react'

const Tombol = (props) => {
    return <button onClick={() =>{
        return alert(`Anda telah mengklik Tombol ${props.name}`);
      }}>
        Tombol {props.name}
      </button>
}

export default Tombol;
