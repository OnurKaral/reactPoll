import React,{useState} from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function New() {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);

    const handleChangeOption = ({target}) => {
        const newArray = options;
        newArray[target.id] = target.value;
        setOptions([...newArray]);

        
};
    const handleCreate =() => {
        console.log(question);
        console.log(options);
    }

    return (
    <div >
        <Input  size="large" placeholder="Type your question here" type="text" value={question} 
            onChange={({target}) =>  setQuestion(target.value)}    
        />
       {options.map((option, key) =>(
           <div key={key} className="inputs">
        <Input   placeholder="Enter poll option" type="text" id={key} value={option} onChange={handleChangeOption}/>
        
        </div>
       ))}
       
       <Button  onClick={() =>setOptions([...options, ""])}>New Option</Button>   
       <Button  onClick={handleCreate} type="primary">Primary Button</Button>
    </div>
    )
}

export default New;
