import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { text } from "stream/consumers";
import Link from "next/link";

export default function RandomQuote(){
    const [quote, setQuote] = useState([]);
    const [error, setError] = useState(null);
 function getRandomQuote(){
    axios.get('https://type.fit/api/quotes').then(res=>{
        let quote = res.data;
       let randonNum = Math.floor(Math.random() * quote.length); 
       setQuote(quote[randonNum]);
    })
}
useEffect(()=> {
    getRandomQuote();
},[])

    return(
        <div>
              <button className="GetRandom" onClick={getRandomQuote}>Click Me</button>
              <div className="cardRandom">
              <h2>{quote["text"]}</h2>
              <h3>{quote['author']}</h3>
              <Link href={"http://localhost:3000/"} className="btn">Go back</Link>
    </div>
      
        </div>

    )



}