import { useState } from 'react';

import moment from 'moment';
import Calendar from 'react-calendar';

import style from './CalendarView.module.css';
import 'react-calendar/dist/Calendar.css';

function CalendarView() {

    const [date, setDate] = useState(new Date());

    return (
        <div className={style.container}>
            <h1>Meservation</h1>
            <div className={style.itemOne}>
                <div className={style.itemTwo}>
                    {moment(date).format("YYYY년 MM월 DD일")} 
                    <div>
                        <Calendar 
                            className={`${style.calendarCustom} mx-auto w-full text-sm border-b`}
                            onChange={setDate} 
                            value={date} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarView;