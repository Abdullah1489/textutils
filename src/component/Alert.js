import React from 'react'

function Alert(props) {
    const capatialize = (word)=>{
            const lower=word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
props.alert &&<div className="alert alert-warning alert-dismissible fade show" role="alert">
  
  {props.alert.type} : {props.alert.msg}

</div>
  )
}

export default Alert
