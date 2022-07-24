import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("partses.json")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 gap-5'>

            {
                tools.slice(0, 6).map(tool => <Tool
                    key={tool.id}
                    tool={tool}

                ></Tool>)
            }
        </div>
    );
};

export default Tools;