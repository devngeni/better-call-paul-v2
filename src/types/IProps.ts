export interface LayoutProps {
  title?: string;
  description?: string;
  navbar?: React.ReactNode;
  bottomNav?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  data?: any;
  imageURl?: any;
  navigationbar?: React.ReactNode;
}

export interface NavProps {
  id: string;
  icon?: React.ReactNode;
  label: string;
  path: string;
}
