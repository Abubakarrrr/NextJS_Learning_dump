'use client'
import Link from "next/link"
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log(router)
  function handleNavigate(){
    router.push('/product')
  }
  return (
    <div>
      <h1 className="bg-neutral-400">NextJs kickstart</h1>
      <Link href={'product'}>go to product page</Link>
      <br></br>
      <button onClick={handleNavigate}>navigate to products page</button>
      <br></br>
      <Link href={'profile'}>navigate to profile page</Link>
    </div>
  );
}
