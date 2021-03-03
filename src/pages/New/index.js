import React,{useState} from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { gql, useMutation } from '@apollo/client';
import {NEW_POLL_QUESTION} from './queries'

function New() {
    const [addPOLL, { data }] = useMutation(NEW_POLL_QUESTION);
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([{title: "a"},{ title: "b"}]);

    const handleChangeOption = ({target}) => {
        const newArray = options;
        newArray[target.id].title = target.value;
        setOptions([...newArray]);

};
    const handleCreate =() => {
        addPOLL({ 
            variables: { 
                object: {
                    title: question,  
                    options: {
                    data: options,
                },
            },
        },
    });
 };

    return (
    <div >
        <Input  size="large" 
                placeholder="Type your question here" 
                type="text" value={question} 
                onChange={({target}) =>  setQuestion(target.value)}    
        />
       {options.map((option, key) =>(
           <div key={key} className="inputs">
        <Input   placeholder="Enter poll option"
                 type="text"
                 id={key}
                 value={option.title}
                 onChange={handleChangeOption}/>
        </div>
       ))}
       
       <Button  onClick={() =>setOptions([...options, {title:""}])}>New Option</Button>   
       <Button  onClick={handleCreate} type="primary">Primary Button</Button>
    </div>
    )
}

export default New;
