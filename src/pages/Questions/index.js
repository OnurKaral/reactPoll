import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { gql, useSubscription } from '@apollo/client';
import {POLL_LIST_SUBSCRIPTION} from './queries'
import { Link } from "react-router-dom";

function Questions() {
    const {data,loading } = useSubscription(POLL_LIST_SUBSCRIPTION);

    if(loading){
        return <div>Loading...</div>
    }
    console.log(data);

    return (
        <div>
            <h2>Questions</h2>
        </div>
    )
}

export default Questions;
