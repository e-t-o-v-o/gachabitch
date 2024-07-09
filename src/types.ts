export enum Rarity {
    Ultra = 'Ultra',
    FiveStar = 'FiveStar',
    FourStar = 'FourStar',
    ThreeStar = 'ThreeStar',
    TwoStar = 'TwoStar',
    OneStar = 'OneStar',
    Promotion = 'Promotion',
  }
  
  export interface Character {
    id: string;
    name: string;
    rarity: Rarity;
    description: string;
    image: string;
  }