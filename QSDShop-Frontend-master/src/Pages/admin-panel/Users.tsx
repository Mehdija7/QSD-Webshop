import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getUsers } from "../../Api/Service";
import styles from "./Admin.module.css";
import dayjs from "dayjs";

interface User {
  id: number;
  name: string;
  surname: string;
  created_at: Date;
  email: string;
  roles_id: number;
}

const Users: React.FC = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUsers();

        if (Array.isArray(response.data.Users)) {
          setUsers(response.data.Users);
        } else {
          console.error("Data structure is unexpected:", response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const mapRoleToText = (roleId: number): string => {
    switch (roleId) {
      case 1:
        return "Customer";
      case 2:
        return "Admin";
      case 3:
        return "Super Admin";
      default:
        return "Unknown Role";
    }
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableTr}>
            <th>{t("ID")}</th>
            <th>{t("Email")}</th>
            <th>{t("Name")}</th>
            <th>{t("Surname")}</th>
            <th>{t("CreatedAt")}</th>
            <th>{t("Role")}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{dayjs(user.created_at).toString()}</td>
              <td>{mapRoleToText(user.roles_id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
