import type { AstroCookies } from 'astro';
import type { User } from './types';
import { apiFetch, ApiError } from './api';

const COOKIE_NAME = 'spei_session';
const DEFAULT_MAX_AGE = 60 * 60; // 1h, mismo TTL que el token web-session del API

export interface SessionPayload {
  token: string;
  expiresAt: number;
}

export function setSessionCookie(
  cookies: AstroCookies,
  token: string,
  expiresInSeconds: number = DEFAULT_MAX_AGE,
): void {
  cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
    maxAge: expiresInSeconds,
  });
}

export function clearSessionCookie(cookies: AstroCookies): void {
  cookies.delete(COOKIE_NAME, { path: '/' });
}

export function getSessionToken(cookies: AstroCookies): string | null {
  const cookie = cookies.get(COOKIE_NAME);
  return cookie?.value || null;
}

export async function loadCurrentUser(token: string): Promise<User | null> {
  try {
    return await apiFetch<User>('/auth/me', { token });
  } catch (e) {
    if (e instanceof ApiError && e.status === 401) {
      return null;
    }
    throw e;
  }
}
