// Tipos de navegação para Expo Router
// O Expo Router gera tipos automaticamente com typedRoutes
// Este arquivo mantém compatibilidade com código legado

export type RootStackParamList = {
  '/(app)/home': undefined;
  '/(auth)/login': undefined;
  '/': undefined;
};

export enum Routes {
  HOME = '/(app)/home',
  LOGIN = '/(auth)/login',
  INDEX = '/',
}

// Para uso com Expo Router typed routes
declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: '/' | '/(app)/home' | '/(auth)/login' | '/_sitemap' | '/+not-found';
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}

