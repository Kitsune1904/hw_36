import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) =>response.json()
          .then((userData) => {
            setUser(userData);
          })
          .catch((error) => console.error(error))
      )
      .catch((error) => console.error(error))
  }, []);

  console.log(user)

    if(user) {
        return Object.keys(user).length >= 1 ? (
            <div className="userInfo">
                <p><span>User name is - </span>{user.name}</p>
            </div>) :
            <p>No data recived</p>
    } else {
        return <p>Loading...</p>
    }    
};
export default User;
