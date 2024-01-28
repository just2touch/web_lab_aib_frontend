import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!user) {
    return <p class="waiting">Ожидание...</p>;
  }

  return (
    <div className="about-person">
      <h1>Информация о персонаже</h1>
      <div className="people-info">
          Имя: {user.name}<br/>
          Рост: {user.height}<br/>
          Масса: {user.mass}<br/>
          Цвет волос: {user.hair_color}<br/>
          Цвет кожи: {user.skin_color}<br/>
          Цвет глаз: {user.eye_color}<br/>
          Дата рождения: {user.birth_year}<br/>
          Пол: {user.gender}<br/>
      </div>
    </div>
  );
};

export default UserInfo;