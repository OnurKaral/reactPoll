import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useQuery } from '@apollo/client';
import {QUESTION_DETAIL_SUBSCRIPTION} from './queries'

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
