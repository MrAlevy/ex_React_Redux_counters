import React from 'react';

function Album(props) {

  console.log(props)

  return (
    <div>
      id: {props.location.state.album.id} <br />
      title: {props.location.state.album.title}
    </div>
  );
}

export default Album;
