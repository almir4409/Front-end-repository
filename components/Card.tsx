import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Card(props: {text: string, author: string}): JSX.Element {
   //There are to many request in the api and the server is crushing but the logic i think is this:
  //const [emoji, setEmoji] = useState("");
 
  // function revealGender(name : string){
  //   axios.get(`https://api.genderize.io?name=${name}`)
  //   .then(response=>{
  //     let gender = response.data;
  //     if(gender == "male"){
  //       setEmoji("🙎‍♂️");
  //     }
  //     else if(gender == "female"){
  //       setEmoji("🙎")
  //     }
  //   })
  // }
  // useEffect(()=>{
  //   revealGender(`${props.author}`)
  // })
  return (
<div className="card">
 <h2>{props.text}</h2>
 <h3>{props.author}</h3>
 <Link href={"http://localhost:3000/randomquote"} className="btn">Get Random Quote</Link>
 </div>
  );
}
