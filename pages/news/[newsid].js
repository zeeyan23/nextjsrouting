import { useRouter } from "next/router"

function NextPage() {

  const router = useRouter();

  const newsId=(router.query.newsid);
  
    return (
      <div>
          <h1>The NextPage Page</h1>
      </div>
    )
  }
  
  export default NextPage