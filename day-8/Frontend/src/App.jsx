    import React, { useEffect, useState } from "react";
    import axios from "axios";

    function App() {
      const [notes, setNotes] = useState([]);

      function fetchNotes(){
        axios.get('http://localhost:3000/notes')
        .then(res=>{
          setNotes(res.data.note)
        })
      }
      useEffect(()=>{
       fetchNotes()
      },[])
      function handleSubmit(e){
        e.preventDefault()
        const { title, description } = e.target.elements
        axios.post('http://localhost:3000/notes',{
          title:title.value,
          description:description.value
        })
        .then(res=>{
              console.log('note created sucessfully')
               fetchNotes()
        })
        // console.log(title.value, description.value)
      }
      function handleDelete(noteId){
        axios.delete('http://localhost:3000/notes/'+noteId)
        .then(res=>{
          console.log(res.data)
          fetchNotes()
        })
      }
      function handlePatch(noteId, newDescription){
        axios.patch(`http://localhost:3000/notes/${noteId}`, {
          description: newDescription
        })
        .then(res=>{
          console.log(res.data)
          setNotes((prevNotes) =>
            prevNotes.map((note) =>
              note._id === noteId ? { ...note, description: newDescription } : note
            )
          )
          fetchNotes()
        })
        .catch(err => {
          console.log(err)
        })
      }
      return (
        <>
        <form className="note-create-from" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="description" placeholder="description" />
          <button>Create note</button>

        </form>
            <div className="notes">
          {Array.isArray(notes) ? (
            notes.map((note) => (
              <div className="note" key={note._id}>
                <h1>{note.title}</h1>
                <p>{note.description}</p>
                <button onClick={()=>{
                  handleDelete(note._id)
                }}>Delete</button>
                <button onClick={() => {
                  const updatedDescription = window.prompt("Enter new description", note.description)
                  if (updatedDescription !== null && updatedDescription !== "") {
                    handlePatch(note._id, updatedDescription)
                  }
                }}>Edit</button>
              </div>
            ))
          ) : (
            <h2>Data not found</h2>
          )}
        </div></>

      );
    }

    export default App;