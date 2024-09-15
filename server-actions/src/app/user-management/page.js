import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";

async function UserManagement() {
  const getListOfUser = await fetchUsersAction();
  console.log(getListOfUser);
  return (
    <div className="p-20 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {getListOfUser && getListOfUser.data && getListOfUser.data.length > 0
          ? getListOfUser.data.map((userItem) => (
              <SingleUserCard key={userItem.id} user={userItem} />
            ))
          : null}
      </div>
    </div>
  );
}
export default UserManagement;
