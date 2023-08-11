import * as React from 'react';
import Link from 'next/link';
import { CSSInterpolation } from '@emotion/css';

type Props = {
  href: string;
  target?: string;
  active?: boolean;
  className?: string;
  css?: CSSInterpolation;
  endIcon?: boolean;
};

export default function CustomLink({ children, ...allProps }: React.PropsWithChildren<Props>) {
  const { active, endIcon = false, ...props } = allProps;
  const { href } = props;
  const internal = href && (href.startsWith('/') ?? href.startsWith('#'));

  if (internal) {
    return (
      <Link {...props} {...allProps} href={href} passHref>
        {children}
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      tw="flex flex-row items-center space-x-1"
      {...props}
    >
      {children}
      {endIcon && endIcon}
    </a>
  );
}
