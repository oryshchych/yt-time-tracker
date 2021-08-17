export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
}

export interface UsersList {
  data: User[];
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
