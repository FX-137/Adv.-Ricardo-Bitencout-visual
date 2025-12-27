
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  author: string;
  text: string;
  role: string;
}

export type DesignMode = 'classic' | 'enhanced';
