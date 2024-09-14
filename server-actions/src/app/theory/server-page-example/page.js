// server actions are asynchronous functions that are exectued on the server
// Server Actions allow Client Components to call async functions executed on the server.

import { fetchListOfProducts } from "@/actions";

// async function fetchListOfProducts() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   return data?.products;
// }

async function ServerActions() {
  //simple data fetching
  //   const products = await fetchListOfProducts();
  //   console.log(products);

  //data fetching using inline 'use server'
  //   async function fetchListOfProducts() {
  //     "use server";
  //     const res = await fetch("https://dummyjson.com/products");
  //     const data = await res.json();
  //     return data?.products;
  //   }
  //   const products = await fetchListOfProducts();
  //   console.log(products);

  //data fetching using 'use server' module
  const products = await fetchListOfProducts();
  console.log(products);

  return (
    <div>
      <h1>Server actions example - server components</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => <li>{item.title}</li>)
        ) : (
          <h2>no products found</h2>
        )}
      </ul>
    </div>
  );
}
export default ServerActions;
