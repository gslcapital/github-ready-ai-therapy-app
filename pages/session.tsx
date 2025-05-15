import Head from 'next/head';

export default function Session() {
  return (
    <>
      <Head>
        <title>Session Dashboard</title>
      </Head>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Session Dashboard</h1>
        <div className="text-gray-600">
          <p>Last Session Summary:</p>
          <p className="mt-2">"Explored stress management techniques. Noted improvement in mood stability."</p>
          <p className="mt-4">Upcoming Session: Friday at 2PM with Dr. Rivera</p>
        </div>
      </main>
    </>
  );
}
