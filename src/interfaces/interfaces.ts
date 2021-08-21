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
  userId: number;
  userName: string;
  time: string;
  note: string;
  id: string;
}

export interface UsersStoreState {
  users: User[];
  loading: boolean;
  error: null | string;
}

export interface TracksStoreState {
  tracks: NewTrack[];
}
