export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
}

interface Address {
  street: string;
  city: string;
  suite: string;
  zipcode: number;
  geo: {
    lat: string;
    lng: string;
  };
}
