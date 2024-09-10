export interface Procedure {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  descriptions?: string[]; // Make descriptions optional
}
