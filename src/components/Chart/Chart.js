import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = ({ dataPoints, }) => {

    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
                {
                    dataPoints.map(({ label, value }) => {
                        return <ChartBar key={label} value={value} maxValue={maxValue} label={label} />
                    })
                }
        </div>
    )
}

export default Chart;
