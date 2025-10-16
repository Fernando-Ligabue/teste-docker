'use client';

import { useEffect } from 'react';

export default function GetParams({ slug }: { slug: string }) {
  useEffect(() => {
    console.log('Slug:', slug);
  }, [slug]);

  return slug;
}