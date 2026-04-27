import { d as defineMiddleware, s as sequence } from './chunks/index_CfRzOPZn.mjs';
import { g as getSessionToken, l as loadCurrentUser, c as clearSessionCookie } from './chunks/session_zTxd9fJv.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_sb5fB8-b.mjs';
import 'cookie';

const PROTECTED_PREFIXES = ["/cuenta", "/checkout"];
const onRequest$1 = defineMiddleware(async (context, next) => {
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
    (p) => url.pathname === p || url.pathname.startsWith(`${p}/`)
  );
  if (isProtected && !locals.user) {
    const returnTo = encodeURIComponent(url.pathname + url.search);
    return redirect(`/login?return_to=${returnTo}`);
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
