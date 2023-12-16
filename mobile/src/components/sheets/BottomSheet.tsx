import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import getStylesHook from 'helpers/getStylesHook.ts';
import {useAppModalSelector} from 'hooks/selectors/useAppModalSelector.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';

const SNAP_POINTS = ['1%', '77%'];

const BottomSheetScrollPanel = ({children}: PropsWithChildren) => {
  const {styles} = useStyles();
  const {isModalShown, setIsModalShown} = useAppModalSelector();

  const ref = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (isModalShown) {
      ref.current?.present();
    }
  }, [isModalShown]);

  const onClose = useCbOnce(() => {
    setIsModalShown(false);
  });

  const RenderBackdropComponent = useCbOnce(
    (props: BottomSheetBackdropProps) => {
      return <BottomSheetBackdrop onPress={onClose} {...props} />;
    },
  );

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
      {children}
    </BottomSheetModal>
  );
};

const useStyles = getStylesHook(_ => ({
  container: {
    marginTop: 10,
  },
}));

export default BottomSheetScrollPanel;
