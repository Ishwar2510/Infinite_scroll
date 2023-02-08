
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { dataAction } from './redux/action/action';
import { useEffect } from 'react';

function App() {
  const dispatcher = useDispatch()
  const data =useSelector((state)=>{
    return state.dataReducer
  })
  const page = useSelector((state)=>{
    return state.limitReducer.page
  })
  useEffect(()=>{
    if(page!=1){
      dispatcher(dataAction(page))
    }
    
  },[page])

  function handleScroll(){
    let height = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let viewHeight = window.innerHeight;
    // console.log("scroll Height--->",height)
    // console.log("scrollTop--->",scrollTop)
    // console.log("window Height--->",viewHeight)

    if(viewHeight+scrollTop+1 >= height){
      // console.log("event called")
      dispatcher({type:'incr'})
    }

  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return function (){
      window.removeEventListener('scroll',handleScroll)
    }
  })

  return (
    <>
    <h1> data will be displayed</h1>
    <button onClick = {()=>{dispatcher(dataAction(page))}}>click to add data </button>
      {
        !data.length>0?<h3>load  data</h3>:data.map((elem,index)=>{
          return <div key={index} >
            <h3>{elem.id}</h3>
            <p>{elem.name}</p>
            <p>{elem.tagline}</p>
            <p>{elem.description}</p>
          </div>
        })
      }<button onClick = {()=>{dispatcher({type:'incr'})}} >next page</button>
    </>
  );
}

export default App;
