import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Гарфилд", 
    skin_color: "оранжевый",
    species: "кот"},
  { id: 2, name: "Оди", 
    skin_color: "желтый",
    species: "собака"},
  { id: 3, name: "Джон", 
    skin_color: "белый",
    species: "человек"},
  { id: 4, name: "Нормал", 
    skin_color: "серый",
    species: "кот"}
];

const Users = () => {
  return (
    <div className="people-container">
      <h1 className="people-header">Существа</h1>
        <div className = "users">
          {users.map((user) => (
            <div key={user.id} className="list-people">
              <Link className="links-users" to={`/information/${user.id}`} state={{ user }}>
                {user.name}
              </Link>
            </div>
          ))}
        </div>
      </div> 
    );
  };

export default Users;