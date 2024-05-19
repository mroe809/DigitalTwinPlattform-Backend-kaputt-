import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getUsers } from "../slices/userSlice";

const UserSettings = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const state = useAppSelector((state) => state);

  const users = useAppSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h1>User Settings</h1>
      {users.map((user) => (
        <div>
          <h4>User Email: </h4>
          {user.name}
        </div>
      ))}
    </>
  );
};

export default UserSettings;