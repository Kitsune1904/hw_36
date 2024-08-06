import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            if(!response.ok) {
                throw new Error("Problem with internet conection");
            }
            const result = await response.json();
            setUserData(result);
        } catch(err) {
            console.error(err)
        }
    }
    fetchData();
  }, [])

  return (
    userData ? <div className="userInfo">
                <p><span>User name is - </span>{userData.name}</p>
            </div> : <p>No data recived</p>
  )
};

export default User;
