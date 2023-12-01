// UserTableComponent.tsx
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  roles_id: number;
}

interface UserTableProps {
  arrayItems: User[];
  title: string;
}

const UserTableComponent: React.FC<UserTableProps> = ({
  arrayItems,
  title,
}) => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    // Check if arrayItems is an array before updating the state
    if (Array.isArray(arrayItems)) {
      setData(arrayItems);
    } else {
      console.error(
        `Expected ${title} to be an array, but it is not. Received:`,
        arrayItems
      );
    }
  }, [arrayItems, title]);

  return (
    <div>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Roles ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roles_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTableComponent;
