
// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { useAuth } from "../auth/AuthContext";

// const Dashboard = () => {
//   const { user } = useAuth();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     api.get("/api/dashboard")
//       .then(res => setData(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard (Protected)</h1>

//       <p>Welcome, {user?.name}</p>
//       <img src={user?.avatar} width="80" />

//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default Dashboard;


import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/api/dashboard")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="user-card">
        {/* <img src={user?.avatar} alt="User Avatar" /> */}
        <p>
          Welcome, <strong>{user?.name}</strong>
        </p>
      </div>

      <div className="data-card">
        {Object.entries(data).map(([key, value]) => (
          <div className="data-row" key={key}>
            <span className="data-key">{key}</span>
            <span className="data-value">
              {typeof value === "object" ? JSON.stringify(value) : value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
