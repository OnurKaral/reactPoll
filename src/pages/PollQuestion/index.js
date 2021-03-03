import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

function PollQuestion() {
    const {id} = useParams();
    console.log(id);
  
    return (
        <div>
            <h2>Questions</h2>
        


        </div>
    )
}

export default PollQuestion;
