import { defineMiddleware } from 'astro:middleware';
import { clearSessionCookie, getSessionToken, loadCurrentUser } from './lib/session';

const PROTECTED_PREFIXES = ['/cuenta', '/checkout'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, locals, redirect } = context;
  const token = getSessionToken(cookies);

  locals.sessionToken = token;
  locals.user = null;

  if (token) {
    const user = await loadCurrentUser(token);
    if (user) {
      locals.user = user;
    } else {
      clearSessionCookie(cookies);
      locals.sessionToken = null;
    }
  }

  const isProtected = PROTECTED_PREFIXES.some(
    (p) => url.pathname === p || url.pathname.startsWith(`${p}/`),
  );

  if (isProtected && !locals.user) {
    const returnTo = encodeURIComponent(url.pathname + url.search);
    return redirect(`/login?return_to=${returnTo}`);
  }

  return next();
});
