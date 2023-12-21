import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  const [users, setUsers] = useState([]);
  return (
    <>
      <h2>fetch data</h2>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
