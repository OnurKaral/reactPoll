import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useSubscription } from '@apollo/client';
import {POLL_LIST_SUBSCRIPTION} from './queries'
import { Link } from "react-router-dom";
import { List} from 'antd';


function Questions() {
    const {data,loading } = useSubscription(POLL_LIST_SUBSCRIPTION);

    if(loading){
        return <div>Loading...</div>
    }
    console.log(data);

    return (
        <div>
            <h2>Questions</h2>
            <List
                size="large"
                dataSource={data.questions.map((q, i) => (
                    <div key={i}>
                        <Link to={`/q/${q.id}`}>{q.title}</Link>
                    </div>
                ))}
                renderItem={item => <List.Item>{item}</List.Item>}
                />


        </div>
    )
}

export default Questions;
