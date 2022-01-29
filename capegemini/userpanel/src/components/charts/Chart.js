import React from "react"
import "../../../node_modules/react-vis/dist/style.css";
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines } from "react-vis";

const Chart = () =>{
    const data =  [
        { x: 1, y: 10 },
        { x: 2, y: 5 },
        { x: 3, y: 15 },
        { x: 3, y: 15 },
        { x: 3, y: 15 }
        ]
    
    return(
        <div style={{marginTop: '15px'}} >
            <XYPlot height={300} width={300} >
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis/>
                <YAxis/>
                <LineSeries data={data} color="red" />
                <LineSeries data={data} color="red" />
                <LineSeries data={data} color="red" />
            </XYPlot>
        </div>
    )
}
export default Chart