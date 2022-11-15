import React from 'react'
import { SearchBar } from './'
import { AiFillYoutube } from 'react-icons/ai'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <span className="icon">
          <AiFillYoutube />
        </span>
        Animal Youtube
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont
