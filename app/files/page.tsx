import { Suspense } from "react";
import styles from "../styles/dashboard.module.css";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("could not fetch data");
  }
  return res.json();
}
export default async function File() {
  const data = await getData();
  console.log(data);

  return (
    <main>
      <h1>All list files</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {(data || []).map((item: any) => (
          <Link href={"/files/" + item?.id} key={item?.id}>
            <div>
              <h3 className={styles.single}>{item?.title}</h3>
            </div>
          </Link>
        ))}
      </Suspense>
    </main>
  );
}
