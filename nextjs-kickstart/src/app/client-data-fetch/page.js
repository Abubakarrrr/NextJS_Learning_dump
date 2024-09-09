'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import useSWR from 'swr'
//with useEffect , useSWR


export default function ClientSideFetching() {

    // const [loading, setLoading] = useState()
    // const [users, setUsers] = useState([])

    // async function fetchListOfUsers() {
    //     try {
    //         setLoading(true)
    //         const apiResponse = await fetch('https://dummyjson.com/users')
    //         const result = await apiResponse.json()
    //         if (result?.users) {
    //             setUsers(result.users)
    //             setLoading(false)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         setUsers([])
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchListOfUsers()
    // }, [])

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>


    return (
        <div>
            <h1>client side data fetching</h1>

            {/* <ul>
                {users && users.length > 0 ?
                    users.map((user) => (
                        <li className="mt-5 cursor-pointer">
                            <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                        </li>)
                    ) : null}
            </ul> */}

             <ul>
                {data && data?.users.length > 0 ?
                   data?.users.map((user) => (
                        <li className="mt-5 cursor-pointer">
                            <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                        </li>)
                    ) : null}
            </ul>

        </div>
    )
}


