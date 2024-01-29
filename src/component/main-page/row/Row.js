import { useState, useEffect } from "react";
import "./row.css";
import Card from "../card/Card";
import axios from "axios";

function Row({ Title, url }) {
  const [movies, setMovies] = useState([]);

//    const fetchMovies= async(url)=>
//    {
//        const response= await axios.get(url)
//        setMovies(response.data.results)
//        console.log("a:",movies)
//    }

  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${url}`,
      {
        params: { api_key: "6657b5a769d7444131a198edfcbae534" },
      }
    );
    // console.log(response.data.results);
    setMovies(response.data.results);

  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="row_wrapper">
      <h3 className="row_title">{Title}</h3>
      <div className="row_cards">
        {movies.map((el) => {
            // console.log(el)
          return <Card Title={el.title} poster={el.backdrop_path} />;
        })}
      </div>
    </div>
  );
}

export default Row;
