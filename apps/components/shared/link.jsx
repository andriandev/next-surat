import NextLink from "next/link";

export default function Link({ children, prefetch = false, ...props }) {
  return (
    <NextLink prefetch={prefetch} {...props}>
      {children}
    </NextLink>
  );
}
