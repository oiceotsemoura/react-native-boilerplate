import { useAuthStore } from '@store/auth/authStore';

export const useCompleteOnboarding = () => {
  const setOnboardingCompleted = useAuthStore(
    state => state.setOnboardingCompleted,
  );

  const completeOnboarding = async () => {
    try {
      setOnboardingCompleted(true);

      return { success: true };
    } catch (error) {
      console.error('Error completing onboarding:', error);
      return { success: false, error };
    }
  };

  return {
    completeOnboarding,
  };
};
