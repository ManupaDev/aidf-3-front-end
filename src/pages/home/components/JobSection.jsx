import { getJobs } from "@/lib/api/jobs";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

function JobSection() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJobs()
      .then((data) => {
        setIsError(false);
        setJobs(data);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <section className="py-8">
        <h2>Available Jobs</h2>
        <p>Loading...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-8">
        <h2>Available Jobs</h2>
        <p className="text-destructive">Error: {error.message}</p>
      </section>
    );
  }

  return (
    <section className="py-8">
      <h2>Available Jobs</h2>
      <div className="mt-4 flex flex-col gap-y-8">
        {jobs.map((job) => {
          return <JobCard key={job._id} job={job} />;
        })}
      </div>
    </section>
  );
}

export default JobSection;
