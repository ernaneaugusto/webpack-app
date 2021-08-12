interface Address {
  postalCode: string;
  city: string;
  neighbourhood: string;
}

interface Establishment {
  id: string;
  name: string;
  imageUrl: string;
  establishmentUrl: string;
  productsWithDiscount: number;
}

export interface EstablishmentHome {
  total: number;
  pages: number;
  address: Address;
  currentPage: number;
  items: Array<Establishment>;
}
