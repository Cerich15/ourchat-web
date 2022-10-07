import {ReactElement} from "react";

type OnShowModal = {
  (component: ReactElement): void;
};

type OnHideModal = {
  (): void;
};

type Props = {
  visible: boolean;
  onShow: OnShowModal;
  onHide: OnHideModal;
};

export type {Props};
