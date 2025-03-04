import { useState } from 'react'
import Title from './Title'
import Description from './Description'
import './App.css'


function App() {
  const styleOfNote = {
    fontWeight: "bold",
    color : "green"
  }
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("")
  const [notes,setNotes] = useState([])
  function handleTitleChange(value){
    setTitle(value)
    console.log(value)
  }
  function handleDescriptionChange(value){
    setDescription(value);
    console.log(value);
  }
  function handleClick(){
    if(title.trim()!== "" && description.trim()!== ""){
      setNotes([...notes,{title:title,description:description,importance:false}])
    }
    else{
      console.log("Empty fields!!!")
    }
  }
  function handleDelete(index){
    setNotes(notes.filter((note,currentIndex)=>{
      if(index !== currentIndex){
        return note;
      }
    }))
  }
  function handleChange(index){
    setNotes(notes.map((note,currentIndex)=>{
      if(currentIndex === index){
        return ({...note, importance : !(note.importance)})
      }
      else {
      return note;
      }
    }))
  }
  return (
    <>
      <Title handleTitleChange={handleTitleChange}/>
      <Description handleDescriptionChange={handleDescriptionChange}/>
      <button onClick={handleClick}>Add Note</button>
      <div className='Notes'> 
        {notes.length > 0 ? notes.map((note,index)=>
        <li key={index} style={note.importance ? styleOfNote : {}}>{note.title} {note.description}
          <button onClick={()=>handleDelete(index)}>Delete</button> 
          <input onChange={()=>handleChange(index)} type="checkbox" id={index} name="notes"  checked={note.importance}  />
        </li>) : <p>There is no item </p>}
      </div>
    </>
  )
}

export default App




