import "./Chart.css"
import ChartBar from "./ChartBar"

function Chart(props){
  const dataPointValues = props.dataItems.map(dataPoint => dataPoint.value)
  const maxVal = Math.max(...dataPointValues)

  return ( 
  <div className="chart">
    {props.dataItems.map(dataPoint => <ChartBar 
    key={dataPoint.label}
    value={dataPoint.value} 
    maxValue={maxVal}
    label={dataPoint.label} / >)}

  </div>
  )

}



export default Chart