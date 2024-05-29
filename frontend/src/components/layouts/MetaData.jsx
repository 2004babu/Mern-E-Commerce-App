import React from 'react'
import { Helmet } from 'react-helmet-async'

const MetaData = ({Title}) => {
  return (
    <>
      <Helmet>
        <title> { `${Title}- Babu Cart`}</title>
      </Helmet>
    </>
  )
}

export default MetaData
