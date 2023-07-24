// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, listDetails: []}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({listDetails: updatedData, isLoading: false})
  }

  renderData = () => {
    const {listDetails} = this.state

    return (
      <div className="list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="coin-image"
        />
        <div className="list-details">
          <div className="heading-container">
            <h1 className="coin-type">Coin Type</h1>
            <div className="coin-from">
              <h1 className="coin-type">USD</h1>
              <h1 className="coin-type">EURO</h1>
            </div>
          </div>
          <ul className="list-item-container">
            {listDetails.map(eachItem => (
              <CryptocurrencyItem coinDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      this.renderData()
    )
  }
}

export default CryptocurrenciesList
