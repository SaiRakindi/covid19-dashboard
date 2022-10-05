import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import IndianState from '../IndianState'

import './index.css'

const AllStatesCases = props => {
  const {covidData, statesList} = props

  const statesData = statesList.map(eachState => ({
    stateName: eachState.state_name,
    stateCode: eachState.state_code,
    confirmed: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].total.confirmed),
    recovered: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].total.recovered),
    deceased: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].total.deceased),
    other: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].total.other),
    population: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].meta.population),
  }))

  const onClickSortingAsc = () => {
    // const ascendingSortedStatesData = statesData.sort((a, b) => {
    //   const x = a.stateName.toUpperCase()
    //   const y = b.stateName.toUpperCase()
    //   return x > y ? 1 : -1
    // })
    // console.table(ascendingSortedStatesData)

    statesData.sort((a, b) =>
      a.stateName.toUpperCase() > b.stateName.toUpperCase() ? 1 : -1,
    )

    console.table(statesData)
  }

  const onClickSortingDesc = () => {
    // const descendingSortedStatesData = statesData.sort((a, b) => {
    //   const x = a.stateName.toUpperCase()
    //   const y = b.stateName.toUpperCase()
    //   return x > y ? -1 : 1
    // })

    statesData.sort((a, b) =>
      a.stateName.toUpperCase() > b.stateName.toUpperCase() ? -1 : 1,
    )

    console.table(statesData)
  }

  return (
    <div className="stats-table" testid="stateWiseCovidDataTable">
      <div className="table-header">
        <div className="states-name-column">
          <p className="table-header-title">States/UT</p>
          <div className="icons-container">
            <button
              type="button"
              className="sorting-icon"
              onClick={onClickSortingAsc}
            >
              <FcGenericSortingAsc size="20" />
            </button>
            <button
              type="button"
              className="sorting-icon"
              onClick={onClickSortingDesc}
            >
              <FcGenericSortingDesc size="20" />
            </button>
          </div>
        </div>
        <div className="table-column">
          <p className="table-header-title">Confirmed</p>
        </div>
        <div className="table-column">
          <p className="table-header-title">Active</p>
        </div>
        <div className="table-column">
          <p className="table-header-title">Recovered</p>
        </div>
        <div className="table-column">
          <p className="table-header-title">Deceased</p>
        </div>
        <div className="table-column">
          <p className="table-header-title">Population</p>
        </div>
      </div>
      <hr className="line" />
      <ul className="state-stats-container">
        {statesData.map(state => (
          <IndianState key={state.stateCode} state={state} />
        ))}
      </ul>
    </div>
  )
}

export default AllStatesCases
