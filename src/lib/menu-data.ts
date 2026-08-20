export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

export const SIGNATURE_BURGERS: MenuItem[] = [
  {
    name: 'Smashed Burger',
    description:
      'Pain potato bun, steak Black Angus smashé sur plancha, cheddar fondu, oignons frits croustillants, sauce signature Smashed.',
    price: 'CHF 16.-',
    tag: 'Best-seller',
  },
  {
    name: 'Kaiser Smashed Burger',
    description:
      'La même recette signature sur un pain kaiser croustillant, pour plus de tenue en bouche.',
    price: 'CHF 17.-',
  },
  {
    name: 'Truffe Kaiser Smashed Burger',
    description:
      'Notre Kaiser Smashed Burger relevé à la mayonnaise truffée pour une version plus gourmande.',
    price: 'CHF 18.-',
    tag: 'Signature',
  },
  {
    name: 'Classic Cheeseburger',
    description:
      'La version simple et directe : steak smashé, cheddar fondu, pain moelleux. L’essentiel, bien fait.',
    price: 'CHF 15.-',
  },
];

export const VEGGIE_BURGERS: MenuItem[] = [
  {
    name: 'Veggie Smashed Burger',
    description: 'La recette Smashed Burger déclinée en version végétarienne.',
    price: 'CHF 16.-',
    tag: 'Végétarien',
  },
  {
    name: 'Veggie Kaiser Smashed Burger',
    description: 'Version végétarienne du Kaiser Smashed Burger, sur pain kaiser.',
    price: 'CHF 17.-',
    tag: 'Végétarien',
  },
  {
    name: 'Veggie Truffe Kaiser Smashed Burger',
    description: 'Version végétarienne relevée à la mayonnaise truffée.',
    price: 'CHF 18.-',
    tag: 'Végétarien',
  },
  {
    name: 'Veggie Classic Cheeseburger',
    description: 'La version végétarienne du Classic Cheeseburger.',
    price: 'CHF 15.-',
    tag: 'Végétarien',
  },
];

export const SIDES: MenuItem[] = [
  {
    name: 'Frites',
    description: 'Portion de frites maison.',
    price: 'CHF 6.-',
  },
];
