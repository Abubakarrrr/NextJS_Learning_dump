"use client";

import { addNewUserAction, EditUserAction } from "@/actions";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useContext, useState } from "react";
import { UserContext } from "@/context";

function AddNewUser() {
  const {
    openModal,
    setOpenModal,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedId,
    setCurrentEditedID,
  } = useContext(UserContext);
  //   console.log(addNewUserFormData)
  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUserAction() {
    const result =
      currentEditedId !== null
        ? await EditUserAction(
            currentEditedId,
            addNewUserFormData,
            "/user-management"
          )
        : await addNewUserAction(addNewUserFormData, "/user-management");
    console.log(result);
    setOpenModal(false);
    setAddNewUserFormData(addNewUserFormInitialState);
    setCurrentEditedID(null)
  }

  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Add New User</Button>
      <Dialog
        open={openModal}
        onOpenChange={() => {
          setOpenModal(false);
          setAddNewUserFormData(addNewUserFormInitialState);
          setCurrentEditedID(null);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedId !== null ? "Edit user" : "Add new user"}
            </DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {addNewUserFormControls.map((controlItem) => (
              <div key={controlItem.name} className="mb-5">
                <Label htmlFor={controlItem.name} className="text-right">
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}
                  className="col-span-3"
                  type={controlItem.type}
                  value={addNewUserFormData[controlItem.name]}
                  onChange={(event) =>
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem.name]: event.target.value,
                    })
                  }
                />
              </div>
            ))}
            <DialogFooter>
              <Button disabled={!handleSaveButtonValid()} type="submit">
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default AddNewUser;
