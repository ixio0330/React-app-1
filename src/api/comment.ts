import http from './http';

export interface CommentDto {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export async function getAll() {
  return await http.get('comments'); 
}

export async function getById(id: number) {
  return await http.get(`comments/${id}`);
}

export async function getByPostId(id: number): Promise<CommentDto[]> {
  return await http.get(`comments?postId=${id}`);
}