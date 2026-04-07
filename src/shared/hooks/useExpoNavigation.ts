import { useRouter, useLocalSearchParams, usePathname } from 'expo-router';

export type NavigationRoutes = {
  '/(app)/home': undefined;
  '/(auth)/login': undefined;
};

export type RootStackParamList = NavigationRoutes;

// Hook para usar navegação similar ao React Navigation
export function useNavigation() {
  const router = useRouter();

  return {
    navigate: (route: keyof NavigationRoutes, params?: any) => {
      router.push({ pathname: route as any, params });
    },
    replace: (route: keyof NavigationRoutes, params?: any) => {
      router.replace({ pathname: route as any, params });
    },
    goBack: () => {
      router.back();
    },
    canGoBack: () => {
      return router.canGoBack();
    },
  };
}

// Hook para pegar os parâmetros da rota
export function useRoute<T = any>() {
  const params = useLocalSearchParams();
  const pathname = usePathname();

  return {
    params: params as T,
    name: pathname,
  };
}

// Re-exportar tipos comuns
export enum Routes {
  HOME = '/(app)/home',
  LOGIN = '/(auth)/login',
}
