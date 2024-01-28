import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="people-container">
      <h1 className = "people-header">Персонажи Star Wars</h1>
      <div className="users">
        {users.map((user) => (
          <div key={user.url} className="list-people">
            <Link className="links-users" to={`/info/${user.url.split("/people/")[1]}`}>
              {user.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;