
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, MessageSquareHeart, Users, Activity, ClipboardList } from "lucide-react";

// canvas code continues here
// ... For brevity, code will be copied from the canvas document

export default function AIWellnessApp() {
  const [walletAddress, setWalletAddress] = useState("");
  const [digitalId, setDigitalId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [goalsCompleted, setGoalsCompleted] = useState(0);
  const [goals, setGoals] = useState([]);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [transferAddress, setTransferAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [transferStatus, setTransferStatus] = useState("");
  const [matchedTherapist, setMatchedTherapist] = useState(null);
  const [sessionNotes, setSessionNotes] = useState([]);

  useEffect(() => {
    if (goals.length > 0) {
      setGoalsCompleted(goals.length);
      setTokenBalance((prev) => prev + goals.length * 2);
    }
  }, [goals]);

  const verifyIdentity = async () => {
    if (!digitalId || !walletAddress) return;
    const verified = digitalId.length >= 5 && walletAddress.length >= 10;
    setIsVerified(verified);
  };

  const handleTransfer = () => {
    const amount = parseInt(transferAmount);
    if (!isVerified) {
      setTransferStatus("⚠️ Identity verification required.");
      return;
    }
    if (!transferAddress || isNaN(amount) || amount <= 0 || amount > tokenBalance) {
      setTransferStatus("Invalid transfer request.");
      return;
    }
    setTokenBalance(prev => prev - amount);
    setTransferStatus(`✅ Transferred ${amount} tokens to ${transferAddress.slice(0, 6)}...`);
    setTransferAddress("");
    setTransferAmount("");
  };

  const pairTherapist = async () => {
    const mockMatch = {
      name: "Dr. Ari Mindwell",
      focus: "CBT + Trauma-Informed",
      matchScore: 94,
      wallet: "0xT34R4P157...",
      contact: "ari.mindwell@therapy.ai",
      bio: "Dr. Mindwell specializes in trauma recovery and cognitive restructuring, integrating mindfulness and behavior tracking into care."
    };
    setMatchedTherapist(mockMatch);
  };

  const contactTherapist = () => {
    if (matchedTherapist?.contact) {
      window.location.href = `mailto:${matchedTherapist.contact}?subject=Therapy%20Match&body=Hi%20${matchedTherapist.name},%20I'd%20like%20to%20schedule%20a%20session.`;
    }
  };

  const reassignTherapist = () => {
    setMatchedTherapist(null);
    pairTherapist();
  };

  const logSessionNote = () => {
    const timestamp = new Date().toLocaleString();
    setSessionNotes(prev => [...prev, `📌 Session logged with ${matchedTherapist?.name} on ${timestamp}`]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 p-6">
      <Tabs defaultValue="wallet" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white shadow-md rounded-2xl mb-6 overflow-hidden">
          <TabsTrigger value="wallet" className="py-2">🔐 Wallet</TabsTrigger>
        </TabsList>

        <TabsContent value="wallet">
          <Card className="rounded-xl">
            <CardContent className="p-6 space-y-6 text-center">
              <h2 className="text-xl font-semibold">Connect and Verify Digital Identity</h2>
              <Input
                placeholder="Enter your Fexbook ID"
                value={digitalId}
                onChange={(e) => setDigitalId(e.target.value)}
                className="rounded-xl"
              />
              <Input
                placeholder="Enter your wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="rounded-xl"
              />
              <Button
                disabled={!walletAddress || !digitalId}
                onClick={verifyIdentity}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white"
              >
                Verify Identity
              </Button>
              {isVerified && (
                <p className="text-sm text-green-700 mt-2">
                  ✅ Verified Wallet {walletAddress.slice(0, 6)}... linked to ID #{digitalId}
                </p>
              )}
              {!isVerified && walletAddress && digitalId && (
                <p className="text-sm text-yellow-600 mt-2">
                  ⚠️ Verification required for data transfers.
                </p>
              )}

              <div className="pt-4 border-t mt-6">
                <h3 className="text-lg font-semibold mb-2">Transfer Tokens</h3>
                <Input
                  placeholder="Recipient wallet address"
                  value={transferAddress}
                  onChange={(e) => setTransferAddress(e.target.value)}
                  className="rounded-xl"
                />
                <Input
                  type="number"
                  placeholder="Amount to send"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  className="rounded-xl mt-2"
                />
                <Button onClick={handleTransfer} className="w-full mt-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white">
                  Send Tokens
                </Button>
                {transferStatus && <p className="text-sm text-green-700 mt-2">{transferStatus}</p>}
              </div>

              <div className="pt-4 border-t mt-6">
                <h3 className="text-lg font-semibold mb-2">AI-Powered Therapist Match</h3>
                <Button onClick={pairTherapist} className="w-full bg-indigo-600 text-white">
                  Find a Therapist Match
                </Button>
                {matchedTherapist && (
                  <div className="mt-4 text-left bg-white rounded-xl p-4 border space-y-2">
                    <p><strong>Name:</strong> {matchedTherapist.name}</p>
                    <p><strong>Specialty:</strong> {matchedTherapist.focus}</p>
                    <p><strong>Compatibility:</strong> {matchedTherapist.matchScore}%</p>
                    <p><strong>Bio:</strong> {matchedTherapist.bio}</p>
                    <p className="text-sm text-gray-500">Wallet: {matchedTherapist.wallet}</p>
                    <Button onClick={contactTherapist} className="w-full bg-blue-500 text-white mt-2">Contact Therapist</Button>
                    <Button onClick={logSessionNote} className="w-full bg-emerald-600 text-white">Log Session</Button>
                    <Button onClick={reassignTherapist} className="w-full bg-gray-500 text-white mt-2">Request New Match</Button>
                    {sessionNotes.length > 0 && (
                      <ul className="text-sm text-gray-700 mt-4 list-disc list-inside">
                        {sessionNotes.map((note, i) => <li key={i}>{note}</li>)}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
