import React from "react";
import "./content.css";
import axios from "axios";
import { useEffect } from "react";
import rowData from "../constant/URL";
import Row from "../row/Row";
 
function Content() {
  // console.log(rowData);
  // const getMovies = async()=>
  // {
  //     const response=await axios.get("http://api.themoviedb.org/3/movie/top_rated",{
  //         params:{ api_key:"6657b5a769d7444131a198edfcbae534"}
  //     })
  //     console.log(response.data.results);
  //  }
  // useEffect(()=>
  // {
  //     getMovies();
  // }
  // )

  return (
    <div className="content-wrapper">
      {rowData.map((el) => {
        // console.log(el);
        return <Row Title={el.title} url={el.url} key={el.key}/>;
      })}
    </div>
  );
}

export default Content;
