import React from 'react'

export const CoinRow = ({coin,index}) => {
  return (
    <tr>
        <td>{index}</td>
        <td>
            <img src={coin.image} alt={coin.name} width="20" className="me-4 img-fluid"/>
            <span>{coin.name}</span>    
            <span className="ms-3 text-primary">{coin.symbol.toUpperCase()}</span>
        </td>
        <td>$ {coin.current_price}</td>
        <td className={coin.price_change_percentage_24h>0?'text-success':'text-danger'}>{coin.price_change_percentage_24h}</td>
        <td>{coin.total_volume}</td>
    </tr>
  )
}
