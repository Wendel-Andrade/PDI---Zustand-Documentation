import { useState } from "react";
import { useUserStore } from "../stores/useUserStore";

export function UserForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const addUser = useUserStore((state) => state.addUser);
  const resetUser = useUserStore((state) => state.resetUser);

  const users = useUserStore((state) => state.users);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const handleButtonClick = () => {
    if (userName && userEmail && userPassword) {
      addUser({ name: userName, email: userEmail, password: userPassword });
      setUserName("");
      setUserEmail("");
      setUserPassword("");
    }
  };

  return (
    <>
      <form>
        <div className="container-inputs">
          <input
            type="text"
            value={userName}
            onChange={handleNameChange}
            placeholder="Enter the name"
          />
          <input
            type="text"
            value={userEmail}
            onChange={handleEmailChange}
            placeholder="Enter the e-mail"
          />
          <input
            type="password"
            value={userPassword}
            onChange={handlePasswordChange}
            placeholder="Enter the password"
          />
        </div>
        <button type="button" onClick={handleButtonClick}>
          ADD USER
        </button>

        <button onClick={resetUser}>RESET USER</button>
      </form>

      <>
        <div>
          <ul>
            {users?.map((user, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                <strong>USER NAME:</strong> {user.name}, <strong>EMAIL:</strong>{" "}
                {user.email}
              </li>
            ))}
          </ul>
        </div>
      </>
    </>
  );
}
