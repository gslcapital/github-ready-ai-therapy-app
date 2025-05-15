import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>VitalMind Health</title>
        <meta name="description" content="Free, personalized psychotherapeutic care." />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gray-50 text-center p-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome to VitalMind Health</h1>
          <p className="text-gray-600">This is your AI-powered mental health assistant, secured with digital identity and personalized care pathways.</p>
        </div>
      </main>
    </>
  );
}
