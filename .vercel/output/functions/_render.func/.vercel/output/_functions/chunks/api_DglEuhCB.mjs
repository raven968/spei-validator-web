const API_URL = "http://localhost:8000/v1";
class ApiError extends Error {
  constructor(status, message, data = null) {
    super(message);
    this.status = status;
    this.data = data;
    this.name = "ApiError";
  }
}
async function apiFetch(path, opts = {}) {
  const { method = "GET", body, token, origin, headers = {} } = opts;
  const finalHeaders = {
    Accept: "application/json",
    ...headers
  };
  if (body !== void 0) {
    finalHeaders["Content-Type"] = "application/json";
  }
  if (token) {
    finalHeaders["Authorization"] = `Bearer ${token}`;
  }
  if (origin) {
    finalHeaders["Origin"] = origin;
  }
  const url = `${API_URL}${path}`;
  const res = await fetch(url, {
    method,
    headers: finalHeaders,
    body: body !== void 0 ? JSON.stringify(body) : void 0
  });
  const text = await res.text();
  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }
  if (!res.ok) {
    const message = extractErrorMessage(data) ?? `HTTP ${res.status}`;
    throw new ApiError(res.status, message, data);
  }
  return data;
}
function extractErrorMessage(data) {
  if (!data || typeof data !== "object") return null;
  const obj = data;
  if (typeof obj.detail === "string") return obj.detail;
  if (typeof obj.message === "string") return obj.message;
  if (obj.errors && typeof obj.errors === "object") {
    const firstField = Object.values(obj.errors)[0];
    if (Array.isArray(firstField) && typeof firstField[0] === "string") {
      return firstField[0];
    }
  }
  return null;
}

export { ApiError as A, apiFetch as a };
