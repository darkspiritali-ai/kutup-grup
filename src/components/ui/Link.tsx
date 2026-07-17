import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children, ...props }: LinkProps) {
  const isHash = href.startsWith('#');
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  if (isHash || isExternal) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
}
