import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@store/auth/authStore';
import { useLogin as useLoginMutation } from '@service/auth';
import { mapUserDTOToUser } from '@mappers/user.mapper';
import z from 'zod';

export const useSignIn = () => {
  const { login: storeLogin } = useAuthStore();
  const { mutateAsync: loginMutateAsync, isPending: isLoading } =
    useLoginMutation();

  const signInSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(100, 'Password must be less than 100 characters'),
  });

  type SignInFormData = z.infer<typeof signInSchema>;

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const response = await loginMutateAsync({
        email: data.email,
        password: data.password,
      });

      storeLogin(mapUserDTOToUser(response.user), response.token);
    } catch (error: any) {
      console.error('Login error:', error);
      setError('password', {
        message:
          error?.response?.data?.message || 'An error occurred during login',
      });
    }
  };

  const handleForgotPassword = () => {
    console.log('Navigate to forgot password');
  };

  const handleSignUp = () => {
    console.log('Navigate to sign up');
  };

  return {
    control,
    errors,
    isLoading,
    handleSignIn: handleSubmit(onSubmit),
    handleForgotPassword,
    handleSignUp,
    signInSchema,
  };
};
