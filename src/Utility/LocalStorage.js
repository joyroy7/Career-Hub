const getStorageApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}
const saveJobApplication = id => {

const storedJobApplications = getStorageApplication();

const exists = storedJobApplications.find(jobid => jobid === id);
if(!exists){
    storedJobApplications.push(id);
    localStorage.setItem('job-applications',JSON.stringify(storedJobApplications))
}
}
export {getStorageApplication ,saveJobApplication}