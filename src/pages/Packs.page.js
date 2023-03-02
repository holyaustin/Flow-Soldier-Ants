import React from 'react'

import { Pack } from '../utils/PackClass'
import useDappyPacks from '../hooks/use-dappy-packs.hook'
import Header from '../components/Header'
import DappyList from '../components/DappyList'
import ErrorLoadingRenderer from '../components/ErrorLoadingRenderer'


export default function Packs() {
  const { loading, error, data: packs } = useDappyPacks()
  return (
    <>
      <Header
        title={<><span className="highlight">Soldier Ant </span>Colonies</>}
        subtitle={<>Join the <span className="highlight">pack drop</span> to get more anties</>}
      />
      <ErrorLoadingRenderer loading={loading} error={error}>
        <DappyList dappies={packs.map(p => new Pack(p?.familyID, p?.name))} store />
      </ErrorLoadingRenderer>
    </>
  )
}
