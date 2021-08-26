import React from "react";

function Alert(props) {
  const capitalize = (word)=>{
    let newword = word;
    return newword.charAt(0).toUpperCase() + newword.slice(1);
  }
  return (
    props.alert && (
      <div
        class={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
      </div>
    )
  );
}

export default Alert;
