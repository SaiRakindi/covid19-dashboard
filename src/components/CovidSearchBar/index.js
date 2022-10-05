import {BsSearch} from 'react-icons/bs'

import './index.css'

const CovidSearchBar = props => {
  const {onChangeSearchInput, searchInput} = props

  const onChangeSearch = event => {
    onChangeSearchInput(event)
  }

  return (
    <div className="search-input-container">
      <BsSearch className="search-icon" />
      <input
        type="search"
        placeholder="Search the state"
        value={searchInput}
        onChange={onChangeSearch}
        className="search-input"
      />
    </div>
  )
}

export default CovidSearchBar
