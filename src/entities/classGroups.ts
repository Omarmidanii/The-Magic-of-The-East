export default interface classGroups {
  classification_id: number;
  classification_name: string;
  groups: Card[];
}

export interface Card {
  id: number;
  name: string;
  photos: string[];
  state: string;
  classification_id: string;
}
