import axios from "axios";
import Link from "next/link";

export function Card(props: {text: string, author: string}): JSX.Element {
  return (
<div className="card">
 <h2>{props.text}</h2>
 <h3>{props.author}</h3>
 <Link href={"http://localhost:3000/randomquote"} className="btn">Get Random Quote</Link>
 </div>
  );
}
