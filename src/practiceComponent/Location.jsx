import React from 'react'

const Location = ({country, province, district, exactLocation}) => {
  return (
    <div>
        Country: {country}
        <br></br>
        Province: {province}
        <br></br>
        District: {district}
        <br></br>
        Exact Location : {exactLocation}
    </div>
  )
}

export default Location