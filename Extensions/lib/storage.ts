const KEYS = {
  API_KEY: 'apiKey',
  LICENSE: 'license',
  MODEL: 'model',
  DEFAULT_LANGUAGE: 'defaultLanguage',
  SETTINGS: 'settings',
  AI_PROVIDER: 'aiProvider',
  AI_BASE_URL: 'aiBaseUrl',
  AI_OAUTH_TOKEN: 'aiOauthToken',
  AI_CUSTOM_MODEL: 'aiCustomModel',
} as const;

export type AIProvider = 'openai' | 'claude' | 'gemini' | 'grok' | 'custom';

/** User tier from web app: managed pro (subscription) or BYOK/BYOAI lifetime */
export type UserTier = 'managed_pro' | 'byok';

export type StoredSettings = {
  apiKey?: string;
  license?: { key: string; tier?: string; valid_until?: string };
  model?: string;
  defaultLanguage?: 'id' | 'en';
  aiProvider?: AIProvider;
  aiBaseUrl?: string;
  aiOauthToken?: string;
  aiCustomModel?: string;
};

function getStorage(): { get: (keys: string) => Promise<Record<string, unknown>>; set: (items: Record<string, unknown>) => Promise<void> } | undefined {
  try {
    const g = typeof globalThis !== 'undefined' ? (globalThis as unknown as { browser?: { storage?: { local?: unknown } }; chrome?: { storage?: { local?: unknown } } }) : ({} as never);
    const b = g.browser ?? (typeof browser !== 'undefined' ? browser : undefined);
    const c = g.chrome;
    const local = (b?.storage?.local ?? c?.storage?.local) as
      | { get: (keys: string) => Promise<Record<string, unknown>>; set: (items: Record<string, unknown>) => Promise<void> }
      | undefined;
    return local?.get && local?.set ? local : undefined;
  } catch {
    return undefined;
  }
}

export function hasStorage(): boolean {
  return getStorage() !== undefined;
}

export async function getStored<K extends keyof StoredSettings>(key: K): Promise<StoredSettings[K] | undefined> {
  const storage = getStorage();
  if (!storage) return undefined;
  const k = (KEYS as Record<string, string>)[key] ?? key;
  const out = await storage.get(String(k));
  return (out as Record<string, unknown>)[String(k)] as StoredSettings[K] | undefined;
}

export async function setStored<K extends keyof StoredSettings>(key: K, value: StoredSettings[K]): Promise<void> {
  const storage = getStorage();
  if (!storage) return;
  const k = (KEYS as Record<string, string>)[key] ?? key;
  await storage.set({ [String(k)]: value });
}

export async function getApiKey(): Promise<string | undefined> {
  return getStored('apiKey');
}

export async function setApiKey(apiKey: string): Promise<void> {
  await setStored('apiKey', apiKey);
}

export async function getLicense(): Promise<StoredSettings['license']> {
  return getStored('license');
}

export async function setLicense(license: StoredSettings['license']): Promise<void> {
  await setStored('license', license);
}

export async function getModel(): Promise<string | undefined> {
  return getStored('model');
}

export async function setModel(model: string): Promise<void> {
  await setStored('model', model);
}

export async function getDefaultLanguage(): Promise<'id' | 'en' | undefined> {
  return getStored('defaultLanguage');
}

export async function setDefaultLanguage(lang: 'id' | 'en'): Promise<void> {
  await setStored('defaultLanguage', lang);
}

export async function getAIProvider(): Promise<AIProvider | undefined> {
  return getStored('aiProvider');
}
export async function setAIProvider(v: AIProvider): Promise<void> {
  await setStored('aiProvider', v);
}
export async function getAIBaseUrl(): Promise<string | undefined> {
  return getStored('aiBaseUrl');
}
export async function setAIBaseUrl(v: string): Promise<void> {
  await setStored('aiBaseUrl', v);
}
export async function getAIOauthToken(): Promise<string | undefined> {
  return getStored('aiOauthToken');
}
export async function setAIOauthToken(v: string): Promise<void> {
  await setStored('aiOauthToken', v);
}
export async function getAICustomModel(): Promise<string | undefined> {
  return getStored('aiCustomModel');
}
export async function setAICustomModel(v: string): Promise<void> {
  await setStored('aiCustomModel', v);
}
