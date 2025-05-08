"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/blog/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h2 className="text-lg font-bold">Blog Posts</h2>
        <ul className="text-sm list-disc list-inside">
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>

        {/* keep your existing buttons/links here... */}
      </main>
    </div>
  );
}
