import React, {useState} from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { mockHistoricalData } from "../constants/mock";
import { convertUnixTimeStampToDate } from "../helpers/date-helper";
import Card from "./Card";

const Chart = () => {
    const [data, setData] = useState(mockHistoricalData);
    const [filter, setFilter] = useState("1W");

    const formatData = ( ) => {
        return data.c.map((item, index) => {
            return {
                value: item.toFixed(2),
                date: convertUnixTimeStampToDate(data.t[index]),
            };
            
        });
    };
    return <Card>
        <ResponsiveContainer>
            <AreaChart data={formatData(data)}>
                <Area type="monotone" dataKey="value" strokr="blue" fillOpacity={1} strokeWidth={0.5} />
            </AreaChart>
        </ResponsiveContainer>
    </Card>
};

export default Chart;