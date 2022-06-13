import { IQuery } from "../types/generated/types";

export interface IImageUploadPageProps {
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  index: number;
  fileUrl: string;
  data?: any;
}
