import React, { useState } from 'react';

const WatchApp = (props)=>{

    const [ dateTimeState, setDateTimeState ] = useState({
        time:{
            timeDate : (new Date()),
            alarm : 'off'
        }
    });

    const [ welcomeMessageState, setWelcomeMessageState ] = useState({
        welcomeMessage : 'This is THE welcome message from functional component with state'
    });

    const syncTime = ()=>{
        //dateTimeState.time.timeDate = new Date();
        //console.log(dateTimeState);
        setDateTimeState({
            time:{
                timeDate:(new Date()),
                alarm : dateTimeState.time.alarm
            }
        });        
    }

    const changeAlarm = ()=>{
        //this will cause component NOT to re-render
        //dateTimeState.time.alarm=dateTimeState.time.alarm==='off' ? 'on' : 'off';
        setDateTimeState({
            time:{
                timeDate : dateTimeState.time.timeDate,
                alarm : dateTimeState.time.alarm==='off' ? 'on' : 'off'
            }
        });       
    }    

    const changeWelcomeMessage = ()=>{
        setWelcomeMessageState({
            welcomeMessage : 'This is changed welcome message'
        });
    }

    return(
        <div>           
            <label>
                {dateTimeState.time.timeDate.toLocaleString()}
            </label>
            <label>
                {welcomeMessageState.welcomeMessage}
            </label>
            <div>
                <button onClick={changeAlarm}>
                    Alarm is {dateTimeState.time.alarm.toString()} !
                </button>
                <button onClick={syncTime}>
                    Sync time with master time
                </button> 
                <button onClick={changeWelcomeMessage}>
                    Change welcome message
                </button>
            </div>       
        </div>
    );

}

export default WatchApp;