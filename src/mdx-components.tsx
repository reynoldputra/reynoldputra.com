import type { MDXComponents } from 'mdx/types';
import Typography from './components/typography/Typography';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
