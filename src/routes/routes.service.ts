type PrivateRoutes = {
  PRIVATE: string;
  HOME: string;
}

type PublicRoutes = {
  LOGIN: string;
  REGISTER: string;
  RECUPERARCONTRASENIA: string;
}
export const privateRoutes: PrivateRoutes = {
  PRIVATE: '/private',
  HOME: '/home',
}

export const publicRoutes: PublicRoutes = {
  LOGIN: '/',
  REGISTER: '/registro',
  RECUPERARCONTRASENIA: '/recuperarcontrasenia',
}