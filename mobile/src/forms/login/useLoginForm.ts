import {useForm, UseFormHandleSubmit, UseFormReturn} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

const loginSchema = z.object({
  fullName: z.string().min(2).max(20).trim(),
});

type Login = z.infer<typeof loginSchema>;

interface UseLoginProps {
  onSuccessfulSubmit: () => void;
}

interface UseLoginReturn {
  form: UseFormReturn<Login>;
  handleSubmit: ReturnType<UseFormHandleSubmit<Login>>;
}

export default function useLoginForm({
  onSuccessfulSubmit,
}: UseLoginProps): UseLoginReturn {
  const form = useForm<Login>({
    defaultValues: {
      fullName: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const handleSubmit = async (formValues: Login) => {
    try {
      console.log('formValues', formValues);
      onSuccessfulSubmit();
    } catch (e) {
      //
    }
  };

  return {
    form,
    handleSubmit: form.handleSubmit(handleSubmit),
  };
}
