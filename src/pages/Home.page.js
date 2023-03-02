import React from 'react'
import { useHistory } from "react-router-dom"
import Header from '../components/Header'
import "./Home.page.css"

export default function Home() {
  const history = useHistory()

  return (
    <>
      <Header
        title={<><span className="highlight">Soldier</span>Ant</>}
        subtitle={<>The brand new <span className="highlight">collectible Colony game</span> on the Flow blockchain</>}
      />
      <img className="header-image"
        alt="Header"
        onClick={() => history.push("/packs")}
        src={`${process.env.PUBLIC_URL}/assets/bg1.gif`}
      />
    </>
  )
}
