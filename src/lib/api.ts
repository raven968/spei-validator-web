const API_URL = import.meta.env.API_URL_INTERNAL;

export interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  token?: string | null;
  origin?: string;
  headers?: Record<string, string>;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data: unknown = null,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiFetch<T = unknown>(path: string, opts: ApiOptions = {}): Promise<T> {
  const { method = 'GET', body, token, origin, headers = {} } = opts;

  const finalHeaders: Record<string, string> = {
    Accept: 'application/json',
    ...headers,
  };

  if (body !== undefined) {
    finalHeaders['Content-Type'] = 'application/json';
  }

  if (token) {
    finalHeaders['Authorization'] = `Bearer ${token}`;
  }

  if (origin) {
    finalHeaders['Origin'] = origin;
  }

  const url = `${API_URL}${path}`;
  const res = await fetch(url, {
    method,
    headers: finalHeaders,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  let data: unknown = null;
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

  return data as T;
}

function extractErrorMessage(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const obj = data as Record<string, unknown>;
  if (typeof obj.detail === 'string') return obj.detail;
  if (typeof obj.message === 'string') return obj.message;
  if (obj.errors && typeof obj.errors === 'object') {
    const firstField = Object.values(obj.errors as Record<string, unknown>)[0];
    if (Array.isArray(firstField) && typeof firstField[0] === 'string') {
      return firstField[0];
    }
  }
  return null;
}
