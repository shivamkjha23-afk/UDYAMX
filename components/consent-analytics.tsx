'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'numsmu_analytics_consent';
const VISITOR_KEY = 'numsmu_visitor_id';

type AnalyticsPayload = {
  event: string;
  path: string;
  referrer: string;
  visitorId: string;
  timestamp: string;
  userAgent: string;
  language: string;
  screen: string;
};

function getVisitorId() {
  const existing = localStorage.getItem(VISITOR_KEY);
  if (existing) return existing;

  const generated = crypto.randomUUID();
  localStorage.setItem(VISITOR_KEY, generated);
  return generated;
}

function sendAnalytics(event: string) {
  const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  if (!endpoint) return;

  const payload: AnalyticsPayload = {
    event,
    path: window.location.pathname,
    referrer: document.referrer,
    visitorId: getVisitorId(),
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    screen: `${window.screen.width}x${window.screen.height}`,
  };

  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, new Blob([body], { type: 'application/json' }));
    return;
  }

  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => undefined);
}

export function ConsentAnalytics() {
  const [choice, setChoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    setChoice(stored);
    if (stored === 'accepted') sendAnalytics('page_view');
  }, []);

  function updateConsent(value: 'accepted' | 'declined') {
    localStorage.setItem(CONSENT_KEY, value);
    setChoice(value);
    if (value === 'accepted') sendAnalytics('consent_accepted');
  }

  if (choice) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-3xl rounded-3xl border border-white/15 bg-slate-950/95 p-5 text-sm text-slate-200 shadow-2xl backdrop-blur-xl" role="dialog" aria-live="polite" aria-label="Analytics consent">
      <p className="font-semibold text-white">Privacy-respecting analytics</p>
      <p className="mt-2 text-slate-300">
        NUMSMU Labs can collect anonymous visit events to improve the website. No analytics are sent unless you accept.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button className="rounded-full bg-electric px-5 py-2 font-semibold text-navy" onClick={() => updateConsent('accepted')}>Allow analytics</button>
        <button className="rounded-full border border-white/15 px-5 py-2" onClick={() => updateConsent('declined')}>Decline</button>
      </div>
    </div>
  );
}
