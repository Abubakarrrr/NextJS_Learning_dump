"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { DeleteUserAction } from "@/actions";
import { useContext } from "react";
import { UserContext } from "@/context";

function SingleUserCard({user}) {
    const { setOpenModal, setAddNewUserFormData,setCurrentEditedID } =
    useContext(UserContext);
    async function handleUserDelete(id){
        const result = await DeleteUserAction(id,'/user-management')
        console.log(result)
    }
    function handleEdit(getCurrentUser){
        setOpenModal(true)
        setAddNewUserFormData({
             firstName:getCurrentUser.firstName,
             lastName:getCurrentUser.lastName,
             email:getCurrentUser.email, 
             address:getCurrentUser.address
        })
        setCurrentEditedID(getCurrentUser?._id)
    }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={()=>handleEdit(user)}>Edit</Button>
        <Button onClick={()=>handleUserDelete(user?._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}
export default SingleUserCard;
