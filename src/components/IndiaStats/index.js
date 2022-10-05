import './index.css'

const IndiaStats = props => {
  const {covidData, statesList} = props

  let activeCases = 0
  let recoveredCases = 0
  let deceasedCases = 0
  let confirmedCases = 0

  statesList.forEach(eachState => {
    if (covidData[eachState.state_code]) {
      const {total} = covidData[eachState.state_code]
      confirmedCases += total.confirmed ? total.confirmed : 0
      recoveredCases += total.recovered ? total.recovered : 0
      deceasedCases += total.deceased ? total.deceased : 0
    }
  })

  activeCases += confirmedCases - (recoveredCases + deceasedCases)

  return (
    <div className="stats-container">
      <div className="confirmed card" testid="countryWideConfirmedCases">
        <p className="stats-type confirmed-cases">Confirmed</p>
        <img
          src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438432/Covid19%20Dashboard/check-mark_1_odg0vn.png"
          alt="country wide confirmed cases pic"
        />
        <p className="confirmed-cases cases">{confirmedCases}</p>
      </div>
      <div className="active card">
        <p className="stats-type active-cases" testid="countryWideActiveCases">
          Active
        </p>
        <img
          src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438417/Covid19%20Dashboard/protection_1_zjqmhw.png"
          alt="country wide active cases pic"
        />
        <p className="active-cases cases">{activeCases}</p>
      </div>
      <div className="recovered card">
        <p
          className="stats-type recovered-cases"
          testid="countryWideRecoveredCases"
        >
          Recovered
        </p>
        <img
          src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438418/Covid19%20Dashboard/recovered_1_qmgv0f.png"
          alt="country wide recovered cases pic"
        />
        <p className="recovered-cases cases">{recoveredCases}</p>
      </div>
      <div className="deceased card">
        <p
          className="stats-type deceased-cases"
          testid="countryWideDeceasedCases"
        >
          Deceased
        </p>
        <img
          src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1654438420/Covid19%20Dashboard/breathing_1_ctu4mw.png"
          alt="country wide deceased cases pic"
        />
        <p className="deceased-cases cases">{deceasedCases}</p>
      </div>
    </div>
  )
}

export default IndiaStats
