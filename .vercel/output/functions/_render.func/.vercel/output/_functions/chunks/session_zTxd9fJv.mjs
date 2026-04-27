import { a as apiFetch, A as ApiError } from './api_DglEuhCB.mjs';

const COOKIE_NAME = "spei_session";
const DEFAULT_MAX_AGE = 60 * 60;
function setSessionCookie(cookies, token, expiresInSeconds = DEFAULT_MAX_AGE) {
  cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: expiresInSeconds
  });
}
function clearSessionCookie(cookies) {
  cookies.delete(COOKIE_NAME, { path: "/" });
}
function getSessionToken(cookies) {
  const cookie = cookies.get(COOKIE_NAME);
  return cookie?.value || null;
}
async function loadCurrentUser(token) {
  try {
    return await apiFetch("/auth/me", { token });
  } catch (e) {
    if (e instanceof ApiError && e.status === 401) {
      return null;
    }
    throw e;
  }
}

export { clearSessionCookie as c, getSessionToken as g, loadCurrentUser as l, setSessionCookie as s };
