'use client';

import dynamic from 'next/dynamic';

// Dynamically import Chatbot with SSR disabled
const Chatbot = dynamic(() => import('@/components/Chatbot'), {
  ssr: false,
});

export default function ChatbotWrapper() {
  return <Chatbot />;
}
