echo "import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>VitalMind Health</title>
        <meta name='description' content='Personalized Psychotherapeutic Health Platform' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to VitalMind Health</h1>
        <p>Your personalized AI-integrated therapy experience starts here.</p>
      </main>
    </>
  );
}" > pages/index.tsx && git add pages/index.tsx && git commit -m "Add index.tsx for Next.js build" && git push origin main
