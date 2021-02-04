import React, { PureComponent, useState, useEffect, iseRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts'




const COLORS = ['#a4c8e6', '#c5b8ec', '#aebcde', '#deaeca'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value
}) => {

    const radius = -28+innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(name)}`} {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function CountPo(v) {
    const { t, i18n } = useTranslation()

    let count = 0;

    const aa = t('songs').map((value, index) => {
        if ( v == '選抜' && (value.position == '選抜' || value.position == '選拔')) {
            count++;
        } else if ( v == 'アンダー' && (value.position == 'アンダー' || value.position == 'Under成員')) {
            count++;
        }else if ( v == '福神' && (value.position == '福神')) {
            count++;
        }else if ( v == 'センター' && (value.position == 'センター' || value.position == '中心成員')) {
            count++;
        }
    })
   
    return count
}

const Example = () => {
    const { t, i18n } = useTranslation()

    const ss = t('senbatsuTitle')
    const uu = t('underTitle')
    const ff = t('fukujinTitle')
    const cc = t('centerTitle')

    console.log(ss)

    let data = [
        { name: ss, value: CountPo("選抜") },
        { name: uu, value: CountPo("アンダー") },
        { name: ff, value: CountPo("福神") },
        { name: cc, value: CountPo("センター") },
    ];


    const jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/'


    return (

        <PieChart width={300} height={300}>
            <Pie
                data={data}
                cx={150}
                cy={150}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
            >
                {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
        </PieChart>

    );

}


const SenSection1 = () => {


    let s = CountPo("選抜")
    let u = CountPo("アンダー")
    let f = CountPo("福神")
    let c = CountPo("センター")

    const { t, i18n } = useTranslation()

    return (
        <section data-aos="zoom-in" class="u-clearfix u-section-1" id="carousel_285f">
            <div class="u-clearfix u-sheet u-sheet-1">
                <h1 class="u-align-right u-text u-text-1">{t('senbatsu')}
                </h1>
                <div class="u-shape u-shape-svg u-text-palette-5-dark-1 u-shape-1">
                    <svg class="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160">
                        <use xmlnsXLink="http://www.w3.org/1999/xlink" xlinkHref="#svg-db78"></use>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXLink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" class="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-db78">
                        <path d="M114.3,152.3l38-38C144.4,130.9,130.9,144.4,114.3,152.3z M117.1,9.1l-108,108c0.8,1.6,1.7,3.2,2.7,4.8l110-110
	C120.3,10.9,118.7,10,117.1,9.1z M97.5,2L2,97.5c0.4,2,1,4,1.5,5.9l99.9-99.9C101.5,2.9,99.5,2.4,97.5,2z M80,160c2,0,4-0.1,5.9-0.2
	l73.9-73.9c0.1-2,0.2-3.9,0.2-5.9c0-0.6,0-1.2,0-1.9L78.1,160C78.8,160,79.4,160,80,160z M34.9,146.1c1.5,1,3,2,4.6,2.9L149,39.5
	c-0.9-1.6-1.9-3.1-2.9-4.6L34.9,146.1z M132.7,19.8L19.8,132.7c1.2,1.3,2.3,2.6,3.6,3.9L136.6,23.4C135.3,22.2,134,21,132.7,19.8z
	 M59.6,157.4l97.8-97.8c-0.5-1.9-1.1-3.8-1.7-5.7L53.9,155.6C55.8,156.3,57.7,156.9,59.6,157.4z M7.6,45.9L45.9,7.6
	C29.1,15.5,15.5,29.1,7.6,45.9z M80,0c-2.6,0-5.1,0.1-7.6,0.4l-72,72C0.1,74.9,0,77.4,0,80c0,0.1,0,0.2,0,0.2L80.2,0
	C80.2,0,80.1,0,80,0z"></path>
                    </svg>
                </div>
                <div class="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-align-right-xs u-container-style u-custom-color-3 u-group u-group-1">
                    <div class="u-container-layout u-container-layout-1">
                        <h4 class="u-custom-font u-text u-text-font">{t('senDesc')}</h4>

                        <div>{t('underTitle')}{t('times')}：{u}</div>
                        <div>{t('senbatsuTitle')}{t('times')}：{s}</div>
                        <div>{t('fukujinTitle')}{t('times')}：{f}</div>
                        <div>{t('centerTitle')}{t('times')}：{c}</div>
                    </div>
                </div>
                <div class="u-shape u-shape-circle u-shape-2 customChartContainer"><Example /></div>
            </div>
        </section>

    )
}

export default SenSection1