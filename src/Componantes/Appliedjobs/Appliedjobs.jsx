import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageApplication } from "../../Utility/LocalStorage";



const Appliedjobs = () => {

    const [appliedJobs , setappliedJobs] = useState([])


    const jobs = useLoaderData();
    useEffect( () => {
        const storedJobIds = getStorageApplication();
        if(jobs,length>0){

            const jobsapplied =[];
            for (const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsapplied.push(job)
                }
            }
            setappliedJobs(jobsapplied);
            // const jobsapplied = jobs.filter(job => storedJobIds.includes(job.id)  )
        }

    }, [jobs] )

    return (
        <div>
            <h2 className="text-2xl">Applide Jobs:{appliedJobs.length}</h2>

            <details className="dropdown mb-32">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>all</a></li>
    <li><a>Rremote</a></li>
    <li><a>Onside</a></li>
  </ul>
</details>


            {
                appliedJobs.map(job => <li key={job.id}>
                    <span>{job.job_titel}{job.company_name} {job.remote_or_onsite}</span>
                </li>)
            }
        </div>
    );
};

export default Appliedjobs;