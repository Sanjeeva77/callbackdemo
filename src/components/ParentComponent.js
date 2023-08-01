import React,{useState,useCallback} from 'react'
import { Title } from './Title'
import { Count } from './Count'
import { Button } from './Button'

export const ParentComponent = () => {

    const [age,setAge]=useState(25)
    const [salary,setSalary]=useState(5000)

    // const incrementAge=()=>{
    //     setAge(age+1)
    // }

    // const incrementSalary=()=>{
    //     setSalary(salary+5000)
    // }

    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])

    const incrementSalary=useCallback(()=>{
        setSalary(salary+5000)
    },[salary])

    return (
        <div>
           <Title/>
           <Count text="Age" count={age} />
           <Button handleClick={incrementAge}>Increment Age</Button>
           <Count text="salary" count={salary}/>
           <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}
