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

export interface NewTrack {
  is: number;
  name: string;
  time: string;
  note: string;
}

export interface UsersStoreState {
  users: User[];
  loading: boolean;
  error: null | string;
}

export interface TracksStoreState {
  tracks: NewTrack[];
}
