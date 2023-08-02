import {useEffect, useState} from 'react'

const Beer = (props) => {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    console.log("In effect")
  }, [])

  useEffect(() => {
    console.log("Has updated")
  })

  return (
    <li className="item" key={props.id}>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} className="item__image"/>
      <p>{props.tagline}</p>
      <button onClick={() => setIsLiked(!isLiked)}>{isLiked ? "LOVE" : "NOPE"}</button>
    </li>
  )
}

export default Beer;