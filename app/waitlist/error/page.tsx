export default function ErrorPage({ searchParams }: { searchParams: { m?: string } }) {
  return (
    <div className="container py-16 text-center">
      <h1 className="text-2xl font-bold">Oups</h1>
      <p className="mt-3 text-white/80">
        {decodeURIComponent(searchParams?.m || "Une erreur est survenue. Réessayez plus tard.")}
      </p>
    </div>
  );
}
