import http from "./http";

export interface UserDto {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export async function getAll(): Promise<UserDto[]> {
  return await http.get('users');
}

export async function getById(id: number): Promise<UserDto> {
  return await http.get(`users/${id}`);
}