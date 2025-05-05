
import Link from "next/link";
const LinkPage = () => {
  const id = 2;
  return (
    <>
      <Link
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google
      </Link>
      <br />
      <Link
        href={`user/profile/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        User {id}
      </Link>
    </>
  );
}

export default LinkPage;
