import { cookies } from 'next/headers';

export async function isAuthenticated() {
  try {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get('admin-auth');
    return authCookie?.value === 'authenticated';
  } catch (error) {
    return false;
  }
}


