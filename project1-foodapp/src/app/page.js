import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Food Recipes App</h1>
      <Link href={"/recipe-list"}><button class="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Explore recipes
        </button></Link>
    </div>
  );
}
