import { useEffect, useState } from "react";

function AdminJobApplicationPage() {
    const [jobApplication, setJobApplication] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);
    
    return ( <div className="flex flex-col gap-y-4"></div> );
}

export default AdminJobApplicationPage;