/** Web app base URL for login/register. Override at build if needed. */
export const WEB_APP_URL = 'https://gapah.vercel.app';

export function getLoginUrl(extensionReturnUrl: string): string {
  const params = new URLSearchParams({ source: 'extension', redirect_url: extensionReturnUrl });
  return `${WEB_APP_URL}/login?${params.toString()}`;
}

export function getRegisterUrl(extensionReturnUrl: string): string {
  const params = new URLSearchParams({ source: 'extension', redirect_url: extensionReturnUrl });
  return `${WEB_APP_URL}/login?${params.toString()}&mode=register`;
}
