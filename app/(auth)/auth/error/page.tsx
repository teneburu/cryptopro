export default function ErrorPage({ searchParams }: { searchParams: { message: string } }) {
  return (
    <div className="error-page">
      <h1>Error</h1>
      <p>{decodeURIComponent(searchParams.message)}</p>
    </div>
  );
}