interface LinkType {
    name: string;
    url: string;
  }
  
  export interface SectionType {
    title: string;
    links: LinkType[];
  }
  

  
export type CarouselItem = {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
};

export type CarouselProps = {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayTime?: number;
};