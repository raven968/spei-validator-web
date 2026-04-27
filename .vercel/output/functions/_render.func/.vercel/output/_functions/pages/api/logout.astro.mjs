import { c as clearSessionCookie } from '../../chunks/session_zTxd9fJv.mjs';
export { renderers } from '../../renderers.mjs';

const POST = ({ cookies, redirect }) => {
  clearSessionCookie(cookies);
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
