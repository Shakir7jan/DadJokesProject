import React, {useState} from 'react'
import './App.css'
import Joke from './components/Joke'
import JokeForm from './components/JokeForm'

function App() {
  const [jokes,setJokes] =useState([
    {
      id: 1,
      text: "I'm afraid for the calendar. Its days are numbered.",
      likes:0
    },
    {
      id: 2, 
      text: "I used to be addicted to soap, but I'm clean now.",
      likes:0

    }
  ])

const handleAddJoke =(text)=> {

const joke = {

text,

// eslint-disable-next-line no-restricted-globals
id:self.crypto.randomUUID(),

likes:0
}
setJokes([joke, ...jokes])
console.log("New Joke:  ", text)
}

const handleDeleteJoke = (id) => {
  setJokes(jokes.filter(joke => joke.id !==id))
console.log("Delete Joke: ", id)

}

const handleLike = (id) =>{

setJokes(jokes.map(joke => {
  if (joke.id ==id) {
    return {...joke, likes : joke.likes + 1 }
  }
else {
  return joke
}

}))



}
 
const handleDislike = (id) =>{

  setJokes(jokes.map(joke => {
    if (joke.id ==id) {
      return {...joke, likes : joke.likes - 1 }
    }
  else {
    return joke
  }
  
  }))

}

const handleSort = () => {

setJokes([...jokes].sort((a, b) =>b.likes - a.likes));


}

const favOne = () => {

handleSort();
console.log(jokes[0]);

}


  return (
    <div className="">
      <h1>Dad Jokes</h1>

      <button onClick={handleSort}> Sort </button>
      <button onClick={favOne}> The Fav One !!! </button>

  

      {jokes.map(joke => (
        <Joke 
        onDelete={handleDeleteJoke}
         key={joke.id} 
         onLike={handleLike}
         onDislike={handleDislike}
         {...joke} />
      ))}

      <JokeForm onAddJoke={handleAddJoke} />

    </div>
  );



      };

export default App
