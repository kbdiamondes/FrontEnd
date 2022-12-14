import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Num, Passed, Width } from './Constant';


export default function Task() {
    const [divW1, setDivW1] = useState<Width[]>([{ wnum: 0 }]);
    const [divW2, setDivW2] = useState<Width[]>([{ wnum: 0 }]);
    const [divW3, setDivW3] = useState<Width[]>([{ wnum: 0 }]);
    const [divW4, setDivW4] = useState<Width[]>([{ wnum: 0 }]);
    const [randTasks, setRandTasks] = useState<Num[]>([])


    const addTask = () => {
        setRandTasks([...randTasks, {
            value: Math.floor((Math.random() * 200) + 1),
            indi: Math.floor(Math.random() < 0.7 ? 0 : 1)
        }])
    }


    const [task1, setTask1] = useState<Passed[]>([]);
    const [task2, setTask2] = useState<Passed[]>([]);
    const [task3, setTask3] = useState<Passed[]>([]);
    const [task4, setTask4] = useState<Passed[]>([]);
    const commitTask = (randTask: Num[]) => {
        const num = {
            value: randTask[0].value,
            lstate: false,
            dura: randTask[0].value
        }
        if (randTask[0].indi === 1) {
            setTask1(old => [...old, num])
            // test(num)
        }
        else {
            if (task4.length === task3.length && task4.length === task2.length) {
                setTask4(old => [...old, num])
                //console.log("Start")
            }
            else if (task4.length < task3.length || task4.length < task2.length) {
                setTask4(old => [...old, num])
                //console.log("4")
            }
            else if (task3.length < task4.length || task3.length < task2.length) {
                setTask3(old => [...old, num])
                //console.log("3")
            }
            else if (task2.length < task4.length || task2.length < task3.length) {
                setTask2(old => [...old, num])
                //console.log("2")
            }
        }
        setRandTasks((randTask) => randTask.filter((_, index) => index !== 0))
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (task1[0] !== undefined) {
                task1[0].lstate = true
            }
            setTask1(prev => prev.filter(i => i.dura > 0).map((item) => {
                if (item.lstate === true) {
                    setDivW1(current =>
                        current.map(obj => {
                            return { ...obj, wnum: item.dura - 1 }
                        })
                    )
                    return {

                        ...item, dura: item.dura - 1
                    }
                }
                return item
            }))
            if (task2[0] !== undefined) {
                task2[0].lstate = true
            }
            setTask2(prev => prev.filter(i => i.dura > 0).map((item) => {
                if (item.lstate === true) {
                    setDivW2(current =>
                        current.map(obj => {
                            return { ...obj, wnum: item.dura - 1 }
                        })
                    )
                    return {

                        ...item, dura: item.dura - 1
                    }
                }
                return item
            }))
            if (task3[0] !== undefined) {
                task3[0].lstate = true
            }
            setTask3(prev => prev.filter(i => i.dura > 0).map((item) => {
                if (item.lstate === true) {
                    setDivW3(current =>
                        current.map(obj => {
                            return { ...obj, wnum: item.dura - 1 }
                        })
                    )
                    return {

                        ...item, dura: item.dura - 1
                    }
                }
                return item
            }))
            if (task4[0] !== undefined) {
                task4[0].lstate = true
            }
            setTask4(prev => prev.filter(i => i.dura > 0).map((item) => {
                if (item.lstate === true) {
                    setDivW4(current =>
                        current.map(obj => {
                            return { ...obj, wnum: item.dura - 1 }
                        })
                    )
                    return {

                        ...item, dura: item.dura - 1
                    }
                }
                return item
            }))
        }, 50)
        return () => clearInterval(interval)
    })
    return (
        <div className='Home'>
            <div className='Task'>&nbsp;
                <Grid
                    container
                    direction="column"
                    gap={5}>
                    <Stack direction="row">
                        <Button variant="contained"
                            onClick={addTask}
                        >
                            Add Random Task
                        </Button>
                    </Stack>
                    <span style={{ fontWeight: 'bold' }}>Task Queue</span>
                    <div>
                        {randTasks.map((index, id) => (
                            <div style={{ display: 'inline-block' }} key={id}>
                                <div style={{ border: 'solid 3px', fontWeight: 'bold', borderColor: index.indi === 1 ? 'red' : 'black', color: index.indi === 1 ? 'red' : 'black', padding: '1px', margin: '1px' }}>
                                    {index.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Stack direction="row">
                        <Button
                            variant="contained"
                            onClick={(e) => commitTask(randTasks)}
                        >Commit Task</Button>
                    </Stack>
                </Grid>
            </div>
            <div style={{ borderRightColor: 'rgb(255, 199, 199)', borderTopColor: 'rgb(255, 199, 199)' }} className='HighQueue'>&nbsp;
                <Grid
                    container
                    direction="column"
                    gap={1}>
                    <span style={{ fontWeight: 'bold' }}>&nbsp;High Priority Queue 1</span>
                    <span>&nbsp;Queue List:</span>
                    <div style={{ marginLeft: '1px', height: '30px' }}>
                        {
                            task1.map((index, id) => (
                                <div style={{ display: 'inline-block' }} key={id}>
                                    <div style={{ border: 'solid 3px red',fontWeight: 'bold',color:'red', padding: '1px', margin: '1px' }}>
                                        {index.value}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <span>&nbsp;Duration:</span>
                    <div style={{ margin: 0, marginLeft: '15px', width: '200px' }}>
                        <div style={{ border: 'solid 1px red', width: divW1[0].wnum, height: '30px', padding: '0px' }}></div>
                    </div>
                </Grid>
            </div>
            <div style={{ borderRightColor: 'gray' }} className='Queue'>&nbsp;
                <Grid
                    container
                    direction="column"
                    gap={1}>
                    <span style={{ fontWeight: 'bold' }}>&nbsp;Regular Queue 2</span>
                    <span>&nbsp;Queue List:</span>
                    <div style={{ marginLeft: '1px', height: '30px' }}>
                        {
                            task2.map((index, id) => (
                                <div style={{ display: 'inline-block' }} key={id}>
                                    <div style={{ border: 'solid 3px black',fontWeight: 'bold',color:'black', padding: '1px', margin: '1px' }}>
                                        {index.value}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <span>&nbsp;Duration:</span>
                    <div style={{ marginLeft: '15px', width: '200px' }}>
                        <div style={{ border: 'solid 1px red', width: divW2[0].wnum, height: '30px', padding: '0px' }}></div>
                    </div>
                </Grid>
            </div>
            <div style={{ borderRightColor: 'gray' }} className='Queue'>&nbsp;
                <Grid
                    container
                    direction="column"
                    gap={1}>
                    <span style={{ fontWeight: 'bold' }}>&nbsp;Regular Queue 3</span>
                    <span>&nbsp;Queue List:</span>
                    <div style={{ marginLeft: '1px', height: '30px' }}>
                        {
                            task3.map((index, id) => (
                                <div style={{ display: 'inline-block' }} key={id}>
                                    <div style={{ border: 'solid 3px black',fontWeight: 'bold',color:'black', padding: '1px', margin: '1px' }}>
                                        {index.value}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <span>&nbsp;Duration:</span>
                    <div style={{ marginLeft: '15px', width: '200px' }}>
                        <div style={{ border: 'solid 1px red', width: divW3[0].wnum, height: '30px', padding: '0px' }}></div>
                    </div>
                </Grid>
            </div>
            <div style={{ borderRightColor: 'gray' }} className='Queue'>&nbsp;
                <Grid
                    container
                    direction="column"
                    gap={1}>
                    <span style={{ fontWeight: 'bold' }}>&nbsp;Regular Queue 4</span>
                    <span>&nbsp;Queue List:</span>
                    <div style={{ marginLeft: '1px', height: '30px' }}>
                        {
                            task4.map((index, id) => (
                                <div style={{ display: 'inline-block' }} key={id}>
                                    <div style={{ border: 'solid 3px black',fontWeight: 'bold',color:'black', padding: '1px', margin: '1px' }}>
                                        {index.value}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <span>&nbsp;Duration:</span>
                    <div style={{ marginLeft: '15px', width: '200px' }}>
                        <div style={{ border: 'solid 1px red', width: divW4[0].wnum, height: '30px', padding: '0px' }}></div>
                    </div>
                </Grid>
            </div>
        </div>
    )
}