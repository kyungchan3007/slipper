import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPagePresenter {
  mypageRight: string;
  onClickMypicks: () => void;
  onClickMyboards: () => void;
  onClickMypaids: () => void;
  data?: Pick<IQuery, "fetchUser">;
  fileUrl: string[];
  showModal: () => void;
  modalVisible: boolean;
  modalCancel: () => void;
  onChangeNickname: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrl: (fileUrl: string) => void;
  onChangeIntroduce: (event: ChangeEvent<HTMLInputElement>) => void;
  modalOk: () => void;
}

export interface IProps {
  mypageRight: boolean;
}
