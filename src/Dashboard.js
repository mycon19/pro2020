import React from 'react';
import { removeUserSession } from './Utils/Common';

function Dashboard(props) {
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    return (
        <div>
            Welcome User! <br/>
            <input type="button" onClick={handleLogout} value="Logout"/>
        </div>
    );
}

export default Dashboard;