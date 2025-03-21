import { useRouter } from "next/router";

//domain.com/news/something

function DetailPage() {
  const router = useRouter();
  console.log(router.query.newsid);
  return <h1>The Detail Page</h1>;
}

export default DetailPage;
