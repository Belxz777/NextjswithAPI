'use client';
import { useEffect,useState } from "react";
export default function getIp(){
//https://api.thecatapi.com/v1/images/0XYvRd7oD
const [id, setid] = useState()
const [result,setResult] = useState()
const [more,setmore] = useState()
const checkIt = async() =>{
    //https://api.thecatapi.com/v1/images/search?id=${{$randomImageUrl}}
 const ip  = await fetch("https://api.ipify.org?format=json") 
 const dataip =  await ip.json()
 const total = dataip.ip
 const totalinfo = await fetch(`https://ipinfo.io/${total}/geo`)
 
 const dataips =  await totalinfo.json()
 setmore(dataips)
 setResult(dataip) 
}
    return (
    <div>
      <button onClick={checkIt} color="red">Где Я?</button>
       <div>
{result ? (
<div>
<h1>{result.ip}</h1>
<h2>{more.city}</h2>
<h2>{more.region}</h2>
<h2>{more.country}</h2>
</div>
) : (
<p>Err </p>
)}
    </div>
    </div>
    )
  }
