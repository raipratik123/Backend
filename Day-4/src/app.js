const express = require('express');
const app = express();
app.use(express.json());
const notes = [];

app.post('/notes', (req, res) => {
  notes.push(req.body);
  console.log(req.body);
});
app.get('/notes',(req,res)=>{
    res.send(notes)
})
app.delete('/notes/:id',(req,res)=>{
    const id=req.params.id;
    notes.splice(id,1);
    res.send('Note deleted successfully');
})
app.patch('/notes/:id',(req,res)=>{
    const id=req.params.id;
    notes[id].description=req.body.description;
    res.send('Note updated successfully');
})
module.exports = app;
