'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

type UserTier = 'managed_pro' | 'byok';

function LoginContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const redirectUrl = searchParams.get('redirect_url');
  const mode = searchParams.get('mode');
  const isExtension = source === 'extension' && redirectUrl?.startsWith('chrome-extension://');
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!isExtension) return;
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.access_token && redirectUrl) {
        const tier: UserTier = (session.user?.user_metadata?.tier as UserTier) ?? 'byok';
        const hash = `#access_token=${encodeURIComponent(session.access_token)}&tier=${tier}`;
        window.location.href = `${redirectUrl}${hash}`;
      }
    });
    return () => subscription.unsubscribe();
  }, [isExtension, redirectUrl]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');
    try {
      if (mode === 'register') {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('Check your email to confirm, then log in.');
        return;
      }
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      if (isExtension && redirectUrl && data.session?.access_token) {
        const tier: UserTier = (data.user?.user_metadata?.tier as UserTier) ?? 'byok';
        const hash = `#access_token=${encodeURIComponent(data.session.access_token)}&tier=${tier}`;
        window.location.href = `${redirectUrl}${hash}`;
        return;
      }
      setMessage('Logged in. You can close this tab.');
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="mb-2 text-lg font-semibold text-gray-900">
          {mode === 'register' ? 'Register' : 'Log in'}
        </h1>
        {isExtension && (
          <p className="mb-4 text-xs text-gray-500">
            After signing in, you’ll be returned to the Gapah extension.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
            required
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {mode === 'register' ? 'Create account' : 'Log in'}
          </button>
        </form>
        {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center p-4"><p className="text-sm text-gray-500">Loading…</p></div>}>
      <LoginContent />
    </Suspense>
  );
}
