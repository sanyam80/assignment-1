
import './style.css';
import {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  var url = "http://www.reddit.com/r/pics/.json?jsonp=";
  const [fetchData,setfetchData] = useState([]);
  const [input,setinput] = useState("");
  const [filterData,setfilterData]  = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    fetchDataFromApi();
    console.log(fetchData);

   
  },[])
  async function fetchDataFromApi(){
    var a = await fetch(url);
    var res = await a.json();
    console.log(res)
    setfetchData(res.data.children);

    
  }
  const inputChange = (e)=>{
     setinput(e.target.value);
  }
  const handleClick = (e)=>{
    console.log(e.target.id);
    const data = fetchData.filter((i)=>i.data.id===e.target.id);
    navigate(`/${e.target.id}`,{state:data});
    console.log(data);
    setfilterData(data);
  }
 
 

  const sortHandle = (e)=>{
    console.log(e.target.value);
    let data;
    if(e.target.value ==="ascending"){
      data = fetchData.sort((a,b)=>{
       return a.data.score - b.data.score;
        }
      )
     setfetchData(data);
    }
    else {
       data = fetchData.sort((a,b)=>{
        return b.data.score - a.data.score;
         }
      )
      // console.log(data[0].data.score)
      setfetchData(data);
    }
    }
  
  return (
    <div id = "container">
        <div id = "header"><div><img src = "https://i.pinimg.com/originals/f9/d0/dc/f9d0dcb17551ab758d5c0b81396a90c1.png" alt = ""></img></div>
         <div> <input type = "text" placeholder = "Search by Title" onChange = {inputChange} /></div></div>
       <div id = "flex">
        <div id = "flex1">
          <div id = "sort">Sort By Score</div>
          <select onChange = {sortHandle}>
            <option value = "ascending">Ascending</option>
            <option value = "descending">Descending</option>
          </select>
        </div>
        <div id = "flex2">
        {fetchData?.filter((i)=>i.data.title.toLowerCase().includes(input)).map((i)=>{
          return <div id = "fetchdata" key = {i.data.id}>
        
          <img id = {i.data.id} onClick = {handleClick} src = {i.data.thumbnail} alt = "thumbnail"></img>
         <div>{i.data.title}</div></div>
        })}
        
       </div>
       </div>
    </div>
  );
}

export default Home;
