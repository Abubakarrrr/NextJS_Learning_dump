import { redirect } from "next/navigation";


export default function Profile(){
    const userInfo = null;
    if(!userInfo) redirect('product?search=product1')
    return ( 
        <div> 
            <h1>profile page</h1>
        </div>
    );
}