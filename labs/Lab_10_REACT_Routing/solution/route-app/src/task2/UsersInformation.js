import React from "react";
import { useLocation } from "react-router-dom";

const UserInfo = () => {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="info-page">
      <h1>Информация о существе</h1>
        <p className="people-info">
        ID: {user.id}<br/>
        Имя: {user.name}<br/>
        Цвет шкуры/кожи: {user.skin_color}<br/>
        Вид: {user.species}<br/>
        </p>
    </div>
  );
};

export default UserInfo;