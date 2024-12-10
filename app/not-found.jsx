export async function generateMetadata() {
  return {
    title: "404",
    description: "404",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function NotFound() {
  return (
    <div className="my-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl">404 Page Not Found</h1>
      <p>The page you visited is not available.</p>
    </div>
  );
}
