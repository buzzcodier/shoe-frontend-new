import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">About Page</h1>

      <Link to="/" className="text-blue-500 underline">
        Return Home
      </Link>
    </div>
  )
}

export default About