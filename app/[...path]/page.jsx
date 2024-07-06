// pages/[[...slug]].js
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CatchAll = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage
    router.replace('/');
  }, [router]);

  return null;
};

export default CatchAll;
