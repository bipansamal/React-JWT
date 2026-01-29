import axios from "axios";
import React, {useEffect} from "react";
import axiosInstance from "../../../axiosInstance";
const Dashboard = () => {
    useEffect(() => {
        const featchProtectedData = async () =>{
            try {
                const response = await axiosInstance  .get('/protected-view')
                console.log('Success:', response.data);

            }catch(error){
                console.error('Error featching data:', error)
            }
        }
        featchProtectedData();
    }, [])
    return (
        <div className="text-light container">Dashboard</div>
    )
}

export default Dashboard