import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { gql, useSubscription } from '@apollo/client';
import {POLL_LIST} from './queries'

function Questions() {
    return (
        <div>
            Questions
        </div>
    )
}

export default Questions;
