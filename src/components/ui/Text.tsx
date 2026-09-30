import { Fragment } from "react";

/**
 * Renders copy and marks every [PLACEHOLDER] with a subtle gold dotted
 * underline so unfinished content is easy to spot before launch.
 */
export function T({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\[[^\]]+\]$/.test(part) ? (
          <span key={i} className="ph" data-placeholder>
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
