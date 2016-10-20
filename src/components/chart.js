import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = ({ dataArray, color, unit }) => {
    return (
        <div>
            <Sparklines data={dataArray} width={180} height={120}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(dataArray)} {unit}</div>
        </div>
    );
}
function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default Chart;