import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>VitalMind Health</title>
        <meta name="description" content="Personalized Psychotherapeutic Health Platform" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gray-50 text-center p-4">
        <div>
          <img src="/logo.svg" alt="VitalMind Logo" className="mx-auto mb-6 h-24" />
          <h1 className="text-3xl font-bold mb-2">Welcome to VitalMind Health</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            A next-generation AI-integrated mental health system delivering free, personalized treatment with biometric intelligence and token incentives.
          </p>
        </div>
      </main>
    </>
  );
}