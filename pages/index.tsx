/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react"
import { Card } from "../components/Card";
export default function Home() {
  const [quote, setQuote] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    //First request
    axios
      .get('https://type.fit/api/quotes')
      .then((response) => {
        const quotes = response.data;

        setQuote(quotes);
      })
      .catch((error) => {
        setError(error.message);
      })
    
  }, []);

  
  return (
<div className="row">
      {quote.map((quote,key) => (
        <Card text={quote['text']} author={quote['author'] } key={key}></Card>
      ))}
    </div>
    )
     
    

}









