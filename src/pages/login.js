import { useState } from "react";
function Login(){
    const [job ,setJob] = useState()
    const [jobs ,setJobs] = useState([])
    const value = e => setJob(e.target.value)
    const myUser = localStorage.getItem('user');
    const myPass = localStorage.getItem('pass');
    const handleSave = () =>{
        setJobs(prev => [...prev, job])
    }

    return(
        <div className="login">
            <h1>{myUser}- {myPass}</h1>
            <input onChange={value}></input>
            <button onClick={handleSave}>Add</button>

            <ul>
                {jobs.map((job, index)=>
                <li key={index}>{job}</li>
                )}
            </ul>
        </div>
    )
}

export default Login