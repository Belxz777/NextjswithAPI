'use client';
import { useEffect,useState } from "react";
export default function otherPage() {
//https://api.thecatapi.com/v1/images/0XYvRd7oD
const [id, setid] = useState()
const [result,setResult] = useState()
const checkIt = async() =>{
    //https://api.thecatapi.com/v1/images/search?id=${{$randomImageUrl}}
 const res  = await fetch("https://api.thecatapi.com/v1/images/search?id=${{$randomImageUrl}}")
 const data =  await res.json()
 setResult(data)
}
    return (
    <div>
      <input value={id  || ''}   onChange={e => setid(e.target.value)} className="text-sky-400" placeholder="имясвое"/>
      <button onClick={checkIt}>Проверить какой котик ты сегодня</button>
       <div>
{result ? (
<div>
<img src={result[0].url} alt="Random Cat" />
</div>
) : (
<p>Пока не котик</p>
)}
    </div>
    </div>
    )
  }
  