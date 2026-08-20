export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  tag?: string;
}

export const SIGNATURE_BURGERS: MenuItem[] = [
  {
    name: 'Le Classique',
    description:
      "Double smash de bœuf suisse, cheddar affiné, oignons caramélisés, pickles maison, sauce Smashed.",
    price: 'CHF 19.-',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    tag: 'Best-seller',
  },
  {
    name: 'Le Fribourgeois',
    description:
      'Smash simple, vacherin fribourgeois AOP fondu, lard fumé du canton, roquette, sauce moutarde à l’ancienne.',
    price: 'CHF 21.-',
    image:
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop',
    tag: 'Signature',
  },
  {
    name: "L'Ember",
    description:
      'Double smash, cheddar long affinage, poivrons braisés, oignons rouges, sauce chipotle fumée maison.',
    price: 'CHF 22.-',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Le Végétal',
    description:
      "Galette de haricots noirs et betterave grillée, cheddar végétal, avocat, oignons croustillants.",
    price: 'CHF 20.-',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop',
    tag: 'Végétarien',
  },
];

export const SIDES_AND_DRINKS: MenuItem[] = [
  {
    name: 'Frites maison, sel de Bex',
    description: 'Pommes de terre du canton, double cuisson, croustillantes.',
    price: 'CHF 7.-',
  },
  {
    name: 'Onion rings dorés',
    description: 'Panure croustillante, sauce fumée au paprika.',
    price: 'CHF 8.-',
  },
  {
    name: 'Coleslaw maison',
    description: 'Chou blanc, carotte, sauce crémeuse au yaourt.',
    price: 'CHF 6.-',
  },
  {
    name: 'Milkshake vanille bourbon',
    description: 'Glace artisanale, crème fouettée, éclats de caramel.',
    price: 'CHF 9.-',
  },
];
