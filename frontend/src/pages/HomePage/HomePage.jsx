import axios from 'axios' 
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, Button } from "react-bootstrap"
import TutorList from '../../components/TutorList/TutorList'

export default function HomePage({props, user}){
    const [students, getStudents] = useState([]);
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        bio: "",
        zipcode: "",
        skills: "",
      });
    

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
        <>
<br />
      <h1>All Tutors in your Area</h1>
     <h3>Zipcode :{form.zipcode}</h3> 
      <TutorList />
      <br /> <br />
      <div> 
        {students.map((tutor) =>
            <TutorList
              tutor={tutor}
              key={user._id}
             />
         
        )}
      </div>
    </>
   


    )
}