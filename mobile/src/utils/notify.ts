import Toast, {ToastOptions} from 'react-native-toast-message';

type NotifyProps = Pick<ToastOptions, 'type'> & {
  title?: string;
  description: string;
};
export const notify = ({type, title, description}: NotifyProps) =>
  Toast.show({
    type,
    text1: title,
    text2: description,
    text1Style: {fontSize: 20},
    text2Style: {fontSize: 16},
  });
