
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserPage from './UserPage';


const Dashboard = (props) => {

    const history = useNavigate();
    const [users, setUsers] = useState([]);
    const [userdata, setUserdata] = useState([]);
    const [showUserPage, setShowUserPage] = useState(false);

    useEffect(() => {
        const getuserArr = localStorage.getItem("user");
        if (getuserArr && getuserArr.length) {
            const userdata = JSON.parse(getuserArr);
            setUserdata(userdata);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user_login");
        history("/");
    }

    const getEmailFromLocalStorage = () => {
        const userLoginData = localStorage.getItem("user_login");
        if (userLoginData) {
            const { email, password } = JSON.parse(userLoginData);
            return email;
        }
        return null;
    }

    const getNameFromEmail = (email) => {
        const user = userdata.find(u => u.email === email);
        return user ? user.name : null;
    }

    const email = getEmailFromLocalStorage();
    const name = getNameFromEmail(email);

    // Define some data for the chart
    const chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Sales",
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 99, 132, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    // Define some options for the chart
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const handleUsersClick = () => {
        setShowUserPage(true);
        history("/users");
    }

    return (
        <div>
            <h1>Welcome, {name}!</h1>
            <button onClick={handleLogout} style={{ backgroundColor: "red" }}>Logout</button>
            <button className='mt-8' style={{ backgroundColor: "green" }} onClick={handleUsersClick}>Users</button>
          <div style={{ width: "50%", margin: "0 auto" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Dashboard;
