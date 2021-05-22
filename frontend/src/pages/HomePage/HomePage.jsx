import axios from 'axios' 
import {useState, useEffect} from 'react'

export default function HomePage(){
    const [students, getStudents] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await axios.get('http://localhost:8000/');
            // const {data2} = await axios.get('http://localhost:8000/');
            console.log('Data =>', data.data);
            // console.log('Data 2 =>', {data2});
        }
        fetchData()
    }, []);

    return(
        <h1>Home</h1>
    )
}