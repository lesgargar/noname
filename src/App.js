import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import {db} from './config/firebase';
import {getDocs, collection} from 'firebase/firestore';

function App() {

  const[movielist, setMovielist] = useState([]);
  const moviesCollectionRef = collection(db, "movies")
//getmovielist funct shows list of movies 
  useEffect(()=>{
    const getMovielist = async () =>{
      try{
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map(
          (doc)=>(
            {...doc.data(),
               id:doc.id
              }));
              setMovielist(filteredData)
      }catch(err){
        console.log(err)
      }
    };
    getMovielist();
  },[])
  
  return (
    <div className="App">
     <Auth/>
     <div>
      {movielist.map((movie)=>(
        <div>
          <h1> {movie.title} </h1>
        </div>
      ))}
     </div>
    
    </div>
  );
}

export default App;
