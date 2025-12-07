'use client';

import { useState } from 'react';
import { SubscriptionForm } from '@/components';

export default function ContactFormTabs() {
  const [activeTab, setActiveTab] = useState<'webinar' | 'subscribe'>('webinar');

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-lg bg-gray-100 p-1" role="group">
          <button
            type="button"
            className={`px-6 py-2 text-sm font-medium rounded-md transition ${
              activeTab === 'webinar'
                ? 'bg-[#1e3a5f] text-white'
                : 'bg-transparent text-gray-700'
            }`}
            onClick={() => setActiveTab('webinar')}
          >
            Webinar Registration
          </button>
          <button
            type="button"
            className={`px-6 py-2 text-sm font-medium rounded-md transition ${
              activeTab === 'subscribe'
                ? 'bg-[#1e3a5f] text-white'
                : 'bg-transparent text-gray-700'
            }`}
            onClick={() => setActiveTab('subscribe')}
          >
            Subscribe for Updates
          </button>
        </div>
      </div>

      {activeTab === 'webinar' ? (
        <SubscriptionForm type="webinar" />
      ) : (
        <SubscriptionForm type="subscribe" />
      )}
    </div>
  );
}
