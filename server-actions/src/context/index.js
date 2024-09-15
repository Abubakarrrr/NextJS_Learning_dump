"use client";
import { addNewUserFormInitialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserState({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );
  const [currentEditedId, setCurrentEditedID] = useState(null);
  return (
    <UserContext.Provider
      value={{
        currentEditedId,
        setCurrentEditedID,
        openModal,
        setOpenModal,
        addNewUserFormData,
        setAddNewUserFormData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
