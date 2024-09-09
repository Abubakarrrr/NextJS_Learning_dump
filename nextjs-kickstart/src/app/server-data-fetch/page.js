import Link from "next/link";

async function fetchUsers() {
    try {
        const response = await fetch('https://dummyjson.com/users')
        const result = await response.json();
        return result.users;
    } catch (err) {
        console.log(err)
    }
}

export default async function ServerSideFetching() {
    const listofUsers = await fetchUsers()
    // console.log(listofUsers)
    return (
        <div>
            <h1>server side data fetching</h1>
            <ul>
                {listofUsers && listofUsers.length > 0 ?
                    listofUsers.map((user) => (
                        <li className="mt-5 cursor-pointer">
                           <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                        </li>)
                    ) : null}
            </ul>
        </div>
    )
}