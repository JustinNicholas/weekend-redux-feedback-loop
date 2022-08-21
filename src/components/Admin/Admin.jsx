//will need a get request in this and map through all form entries.
import axios from "axios";
import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './Admin.css';

function Admin() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchFeedback();
    }, [])
    

    const fetchFeedback = () => {
        axios.get('/feedback')
          .then( response => {
            dispatch({
                type: 'SET_RESPONSES',
                payload: response.data
            })
          }).catch( err => {
            console.log(err);
          })
      }

      const deleteFeedback = (id) => {
        axios.delete(`/feedback/${id}`)
          .then( response => {
            fetchFeedback();
          }).catch( err => {
            console.log(err);
          })
      }

      const responses = useSelector( store => store.responseReducer)
    //   console.log(responses);

    return(
        <>
            <h1 className="admin-header">Admin</h1>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {responses.map( (response) => {
                            return (
                                <tr key={response.id}>
                                    <td>{response.feeling}</td>
                                    <td>{response.understanding}</td>
                                    <td>{response.support}</td>
                                    <td>{response.comments}</td>
                                    <td><button onClick={() => deleteFeedback(response.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                   
                </tbody>
            </table>
        </>
    )
}

export default Admin;