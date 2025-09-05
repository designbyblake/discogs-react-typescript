import type { RefObject, HTMLAttributes } from 'react';
import { createElement, useCallback } from 'react';

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Heading = ({
  children,
  level = 'h2',
  modifers,
  ref,
  ...props
}: HeadingProps) => {
  const HeadingLevel = level as HeadingLevels;
  const classes = useCallback(() => {
    switch (level) {
      case 'h1':
        return 'mb-4 text-5xl';
      case 'h2':
        return 'mb-3 text-4xl';
      case 'h3':
        return 'mb-2 text-3xl';
      case 'h4':
        return 'mb-2 text-2xl';
      case 'h5':
        return 'mb-1 text-xl';
      case 'h6':
        return 'mb-1 text-lg';
      default:
        return 'mb-2 text-4xl';
    }
  }, [level]);
  return createElement(
    HeadingLevel,
    {
      ref,
      className: `${classes()} ${modifers ?? ''} `.trim(),
      ...props
    },
    children
  );
};

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  level?: HeadingLevels;
  modifers?: string;
  ref?: RefObject<HTMLHeadingElement>;
};
