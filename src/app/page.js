'use client';

import { useCreateExample } from '@/hooks/useExample.hook';

export default function Home() {
  const { create, isLoading, error } = useCreateExample();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Next.js App!</h1>
      <p className="mt-4 text-lg">This is a simple example of a Next.js application.</p>
    </main>
  );
}