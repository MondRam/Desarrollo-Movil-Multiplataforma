import React from 'react';


function StudentCard({ name, level, career, click }) {
    var {currentName, setCurrentName} = React.useState(name);

    function UpdateName() {
        setCurrentName(currentName + "Lopez")
    }

    return (
        <div className="">
            
        
        </div>
    )
}