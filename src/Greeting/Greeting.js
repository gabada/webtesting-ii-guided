import React from 'react';

function Greeting(props) {
  const noMessage = <div>No Message</div>;
  return props.msg ? <div>{props.msg}</div> : noMessage;
}

export default Greeting;
