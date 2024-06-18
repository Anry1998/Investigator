import React, {FC, useContext, useState} from "react";
import { Context } from "..";

import Container from 'react-bootstrap/Container';

import { Card} from 'react-bootstrap';

// import '../../src/App.css'

const Time: FC = () => {
    const {datatime} = useContext(Context)

    const [year, setYear] = useState<number>()
    const [month, setMonth] = useState<string>('')
    const [date, setDay] = useState<number>()
    const [hour, setHour] = useState<number>()
    const [minute, setMinute] = useState<number>()
    const [second, setSecond] = useState<number>()


    const monthsSet = () => {
        if (month === 'январь') {
            setMonth('января')
        } else if (month === 'февраль') {
            setMonth('февраля')
        } else if (month === 'март') {
            setMonth('марта')
        } else if (month === 'апрель') {
            setMonth('апреля')
        } else if (month === 'май') {
            setMonth('мая')
        } else if (month === 'июнь') {
            setMonth('июня')
        } else if (month === 'июль') {
            setMonth('июля')
        } else if (month === 'август') {
            setMonth('августа')
        } else if (month === 'сентябрь') {
            setMonth('сентября')
        } else if (month === 'фоктябрь') {
            setMonth('октября')
        } else if (month === 'ноябрь') {
            setMonth('ноября')
        } else if (month === 'декабрь') {
            setMonth('декабря')
        }
    }
    monthsSet()

    

    React.useEffect(() => {
        const getDateTime = async () => {
            setInterval( async () => {
                const s = await datatime.dateTime()

                setYear(datatime.date.year)
                setMonth(datatime.date.month)
                setDay(datatime.date.date)
                setHour(datatime.date.hour)
                setMinute(datatime.date.minute)
                setSecond(datatime.date.second)
            }, 1000)   
        }
        getDateTime()
    }, [])

    return(
        <div> 
            <Container>
                <Card style={{maxWidth: '200px', padding: '10px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    {date} {month} {year} {'г.'}
                    <br></br>
                    {second} {'сек.'} {minute} {'мин.'} {hour} {'час.'}
                </Card>
            </Container> 
        </div>
    )
}

export default Time