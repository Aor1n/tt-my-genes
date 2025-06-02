import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import getStylesHook from 'utils/getStylesHook.ts';
import {useAppModalSelector} from 'hooks/selectors/useAppModalSelector.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';
import {KeyboardAvoidingView} from 'react-native-keyboard-controller';
import IS_IOS from 'consts/IS_IOS.ts';
import {Keyboard, Pressable} from 'react-native';
import {useEffectOnce} from 'hooks/useEffectOnce.ts';

const SNAP_POINTS = ['1%', '77%'];

const BottomSheetScrollPanel = ({children}: PropsWithChildren) => {
  const {styles} = useStyles();
  const {isModalShown, hideModal} = useAppModalSelector();
  const ref = useRef<BottomSheetModal>(null);

  const onClose = useCbOnce(() => {
    Keyboard.dismiss();
    hideModal();
  });

  const RenderBackdropComponent = useCbOnce(
    (props: BottomSheetBackdropProps) => {
      return <BottomSheetBackdrop onPress={onClose} {...props} />;
    },
  );

  useEffect(() => {
    if (isModalShown) {
      ref.current?.present();
    }
  }, [isModalShown]);

  useEffectOnce(() => {
    const subscribtion = Keyboard.addListener('keyboardWillShow', () => {
      ref.current?.snapToPosition('90%');
    });
    return () => subscribtion.remove();
  });

  return (
    <BottomSheetModal
      ref={ref}
      index={isModalShown ? 1 : 0}
      snapPoints={SNAP_POINTS}
      onChange={index => {
        if (index === 0) {
          onClose();
        }
      }}
      handleComponent={null}
      onDismiss={onClose}
      backdropComponent={RenderBackdropComponent}
      style={styles.container}>
      <BottomSheetView>
        <KeyboardAvoidingView behavior={IS_IOS ? 'padding' : 'height'}>
          <Pressable onPress={Keyboard.dismiss}>{children}</Pressable>
        </KeyboardAvoidingView>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const useStyles = getStylesHook(_ => ({
  container: {
    marginTop: 10,
  },
}));

export default BottomSheetScrollPanel;
