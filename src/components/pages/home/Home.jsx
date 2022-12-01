import React from 'react'
import Chart from '../../chart/Chart'
import Featuredinfo from '../../featuredinfo/Featuredinfo'
import './home.css'
import { userData } from '../../../dummyData'
import WidgetSm from '../../widgetsm/WidgetSm'
import WidgetLg from '../../widgetlg/WidgetLg'



export default function Home() {
    return (
        <div className="home">
            <Featuredinfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
