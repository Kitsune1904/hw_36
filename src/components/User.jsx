import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    user ? 
        <div className="userInfo">
            <p><span>User name is - </span>{user.name}</p>
        </div>
    :
        <p>Loading...</p>
  )
};

export default User
