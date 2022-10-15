import React from 'react';

import { useLocation } from 'react-router-dom';


const SingleProducts = () => {

const location = useLocation();
const {state} = location;
// console.log(state[0].data)

return (
    <div id ="singleproduct">
        <div><img src = {state[0].data.thumbnail} alt = "thumbnail"></img></div>
        <div className = "text"><span>Title</span> : {state[0].data.title}</div>
        <div className = "text"><span>Author Name</span> : {state[0].data.author}</div>
     </div>
  )
}

export default SingleProducts;