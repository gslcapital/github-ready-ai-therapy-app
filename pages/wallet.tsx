import Head from 'next/head';

export default function Wallet() {
  return (
    <>
      <Head>
        <title>Token Wallet</title>
      </Head>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Token Wallet</h1>
        <p className="text-gray-600">Balance: 1500 VMT (VitalMind Tokens)</p>
        <p className="text-gray-600">Recent Transactions:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-500">
          <li>+200 VMT – Completed Therapy Session</li>
          <li>+100 VMT – Daily Check-in</li>
          <li>-50 VMT – Reward Redemption</li>
        </ul>
      </main>
    </>
  );
}
