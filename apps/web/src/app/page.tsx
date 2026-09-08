export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">
          ARMIN Security AI
        </h1>

        <p className="mt-4 text-lg">
          AI-powered Security Assessment Platform
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h2 className="font-semibold">Learn</h2>
            <p className="mt-2 text-sm">
              Learn web security and application security.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="font-semibold">Analyze</h2>
            <p className="mt-2 text-sm">
              Analyze requests, responses, code and security data.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="font-semibold">Assess</h2>
            <p className="mt-2 text-sm">
              Run authorized security assessments.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}