import React from 'react'
import HeroError from './HeroError'
import ErrorBoundaries from './ErrorBoundaries'

function ParentHero() {
  return (
    <div>
    <ErrorBoundaries>
    <HeroError heroName="Iron Man"/>
    </ErrorBoundaries>
    <ErrorBoundaries>
    <HeroError heroName="Thor"/>
    </ErrorBoundaries>  
    <ErrorBoundaries>
    <HeroError heroName="Joker"/>
    </ErrorBoundaries>
    </div>
  )
}

export default ParentHero