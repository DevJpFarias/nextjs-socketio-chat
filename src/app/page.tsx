'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/chat');
  }, [router]);

  return (
    <div className='min-h-dvh flex items-center justify-center bg-slate-900'>
      <h1 className='text-white text-xl'>Carregando...</h1>
    </div>
  );
}
