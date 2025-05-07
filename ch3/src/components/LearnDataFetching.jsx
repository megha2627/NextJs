// app/learn/page.jsx (Server Component)
async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const LearnDataFetching = async () => {
  const data = await fetchData()

  return (
    <div>
      <h1>Learn Data Fetching</h1>
      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default LearnDataFetching
