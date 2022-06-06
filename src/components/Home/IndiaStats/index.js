const IndiaStats = props => {
  const data = Object.keys(props)

  return (
    <div>
      <div>
        {data.map(eachData => (
          <li key={eachData}>{eachData}</li>
        ))}
      </div>
    </div>
  )
}

export default IndiaStats
