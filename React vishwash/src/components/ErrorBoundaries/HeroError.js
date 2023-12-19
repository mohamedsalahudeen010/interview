import React from 'react'

function HeroError({heroName}) {
    if(heroName==="Joker"){
        throw new Error("Not a Hero")
    }
  return (
    <div>Hero name is {heroName}</div>
  )
}

export default HeroError