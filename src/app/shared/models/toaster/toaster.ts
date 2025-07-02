export type ToasterType = 'success' | 'error' | 'warning';

export interface IToaster {
  type: ToasterType;
  title: string;
  message: string;
}
