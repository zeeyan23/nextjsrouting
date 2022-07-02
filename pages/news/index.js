import Link from "next/link"
function News() {
    return (
      <div>
          <h1>The News Page</h1>
          <ul>
            <li><Link href="/news/here"> ABC</Link></li>
            <li>XYZ</li>
          </ul>
      </div>
    )
  }
  
  export default News