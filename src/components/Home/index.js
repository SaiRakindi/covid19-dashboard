import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import Footer from '../Footer'
import Header from '../Header'

import IndiaStats from './IndiaStats'

import LoaderSpinner from '../LoaderSpinner'

import './index.css'

class Home extends Component {
  state = {
    covidData: [],
    isLoading: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeData()
  }

  getHomeData = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'

    const response = await fetch(url)

    const data = await response.json()

    this.setState({covidData: data, isLoading: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderHome = () => {
    const {covidData, searchInput} = this.state
    return (
      <>
        <div className="india-total-cases-information">
          <div className="search-input-container">
            <BsSearch className="search-icon" />
            <input
              type="search"
              placeholder="Search a state"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              className="search-input"
            />
          </div>
          <IndiaStats indianStats={covidData} />
          {/* <div>
            {homeData.map(eachHome => (
              <li>{eachHome}</li>
            ))}
          </div> */}
        </div>
        <Footer />
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <main className="home-container">
          {isLoading ? (
            <LoaderSpinner testid="homeRouteLoader" />
          ) : (
            this.renderHome()
          )}
        </main>
      </>
    )
  }
}

export default Home
