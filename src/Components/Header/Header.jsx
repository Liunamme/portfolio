import React, { useState } from 'react'
import style from './Header.module.scss'
import Nav from './Nav/Nav'
const Header = () => {
    const [toggle, setToggle] = useState(false)

    
  return (
    <>
    <header className={`${style.header} ${toggle ? style.active : style.inactive}`}>
        <input type="button" value={toggle ? 'закрыть' : 'навигация'} className={style.header_toggle} onClick={() => setToggle(!toggle)}/>
        <Nav toggle={toggle} />
    </header>
    </>

  )
}

export default Header