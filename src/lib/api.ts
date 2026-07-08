const API_BASE = '/api';

interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE}?path=${path}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || 'Request failed' };
    }

    return { data };
  } catch (error) {
    console.error('API request error:', error);
    return { error: 'Network error' };
  }
}

// Products
export const productsApi = {
  getAll: (params?: { category?: string; search?: string; limit?: number; skip?: number }) =>
    apiRequest<any>(`products${params ? '?' + new URLSearchParams(params as any).toString() : ''}`),
  
  getById: (id: string) => apiRequest<any>(`products/${id}`),
  
  create: (product: any) =>
    apiRequest<any>('products', {
      method: 'POST',
      body: JSON.stringify(product),
    }),
  
  update: (id: string, product: any) =>
    apiRequest<any>(`products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    }),
  
  delete: (id: string) =>
    apiRequest<any>(`products/${id}`, {
      method: 'DELETE',
    }),
};

// Auth
export const authApi = {
  login: (email: string, password: string) =>
    apiRequest<any>('auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  
  register: (email: string, password: string, name: string) =>
    apiRequest<any>('auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    }),
  
  logout: () =>
    apiRequest<any>('auth/logout', {
      method: 'POST',
    }),
};

// Cart
export const cartApi = {
  get: (token: string) =>
    apiRequest<any>('cart', {
      headers: { Authorization: `Bearer ${token}` },
    }),
  
  add: (token: string, productId: string, quantity: number) =>
    apiRequest<any>('cart', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ productId, quantity }),
    }),
  
  remove: (token: string, itemId: string) =>
    apiRequest<any>(`cart/${itemId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),
};

// Wishlist
export const wishlistApi = {
  get: (token: string) =>
    apiRequest<any>('wishlist', {
      headers: { Authorization: `Bearer ${token}` },
    }),
  
  add: (token: string, productId: string) =>
    apiRequest<any>('wishlist', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ productId }),
    }),
  
  remove: (token: string, productId: string) =>
    apiRequest<any>(`wishlist/${productId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),
};
