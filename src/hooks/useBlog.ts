import { useQuery } from '@tanstack/react-query';
import { getPosts, getPost } from '../lib/api';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: string;
  author: string;
  category: string;
  tags: string[];
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPost(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });
}