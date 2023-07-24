// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {coinDetails} = props
  console.log(coinDetails)
  const {currencyName, usdValue, euroValue, currencyLogo} = coinDetails
  console.log(currencyLogo)

  return (
    <li className="item-container">
      <img src={currencyLogo} alt={currencyName} className="logo" />
      <p className="name">{currencyName}</p>
      <p className="value">{usdValue}</p>
      <p className="value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
