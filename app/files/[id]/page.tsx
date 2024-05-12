async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Fail to fetch data");
  }
  return res.json();
}

export default async function DashboardDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPost(id);

  return (
    <div>
      <h1>{post?.username}</h1>
      <p>{post?.email}</p>
      <p>{post?.phone}</p>
      <p>{post?.website}</p>
    </div>
  );
}
