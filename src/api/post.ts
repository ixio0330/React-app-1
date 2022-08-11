import http from "./http";

export interface PostDto {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export async function getAll(): Promise<PostDto[]> {
  return await http.get('posts');
}

export async function getById(id: number): Promise<PostDto> {
  return await http.get(`posts/${id}`);
}