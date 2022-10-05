import {Link} from 'react-router-dom'

import './index.css'

const IndianState = props => {
  const {state} = props

  const {
    stateCode,
    stateName,
    confirmed,
    recovered,
    deceased,
    other,
    population,
  } = state

  const active = confirmed - recovered - deceased - other

  return (
    <>
      <li className="state-list" key={stateCode}>
        <div className="states-container">
          <Link to={`/state/${stateCode}`} className="state-name-link">
            <p className="state-name-text">{stateName}</p>
          </Link>
        </div>
        <div className="table-column">
          <p className="confirmed-case case">{confirmed}</p>
        </div>
        <div className="table-column">
          <p className="active-case case">{active}</p>
        </div>
        <div className="table-column">
          <p className="recovered-case case">{recovered}</p>
        </div>
        <div className="table-column">
          <p className="deceased-case case">{deceased}</p>
        </div>
        <div className="table-column">
          <p className="population case">{population}</p>
        </div>
      </li>
    </>
  )
}

export default IndianState
