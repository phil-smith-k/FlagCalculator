import './App.css';
import { useState } from 'react';

function FlagResult(props) {

    const isActive = (props.flags & props.base) > 0;

    return (
        <li>
            {isActive.toString()}
        </li>
    )
}



function App() {

    const handleChange = (e) => {
        const flags = e.target.value;
        setFlags(flags);
    }
  
    const [flags, setFlags] = useState(0);

    return (
        <div>
            <input onChange={handleChange} type="number" min="0"></input>
            <ul>
                <FlagResult base={0} flags={flags}></FlagResult> 
                <FlagResult base={1} flags={flags}></FlagResult> 
                <FlagResult base={2} flags={flags}></FlagResult> 
                <FlagResult base={4} flags={flags}></FlagResult>
                <FlagResult base={8} flags={flags}></FlagResult>
            </ul>
        </div>
  );
}

export default App;
