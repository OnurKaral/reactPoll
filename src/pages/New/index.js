import React,{useState} from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useMutation } from '@apollo/client';
import {NEW_POLL_QUESTION} from './queries'

function New() {
    const [addPOLL, { loading }] = useMutation(NEW_POLL_QUESTION,{
        onCompleted: () => {
        //    setQuestion('');
        //    setOptions('');
        }
    });
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([{title: "a"},{ title: "b"}]);

    const handleChangeOption = ({target}) => {
        const newArray = options;
        newArray[target.id].title = target.value;
        setOptions([...newArray]);

};
    const handleCreate =() => {
        const optionsCount = options.filter((option) =>option.title !== '');
        if(question === "" || optionsCount.length < 2) return;

        

        addPOLL({ 
            variables: { 
                object: {
                    title: question,  
                    options: {
                    data: optionsCount,
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
       <Button  onClick={handleCreate} disabled={loading} type="primary">Create Poll</Button>
    </div>
    )
}

export default New;
