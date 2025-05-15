import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>VitalMind Health</title>
        <meta name="description" content="Personalized Psychotherapeutic Health Platform" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <img src="/logo.svg" alt="VitalMind Logo" style={{ height: 96, marginBottom: 24 }} />
        <h1 style={{ fontSize: "2rem", marginBottom: 8 }}>Welcome to VitalMind Health</h1>
        <p style={{ maxWidth: 500, textAlign: "center" }}>
          A next-generation AI-integrated mental health system delivering free, personalized treatment with biometric intelligence and token incentives.
        </p>
      </main>
    </>
  );
}
