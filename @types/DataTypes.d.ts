type User = {
  id: number;
  created_at: string;
  name: string;
  age: number;
  am: number;
  pm: number;
};

type UserPostRequest = { body: { name: string; age: number } };

type UserUpdateRequest = {
  params: { id: number };
} & UserPostRequest;

type UserRequestById = { params: { id: number } };

type UserRequest = { query?: { name?: string; age?: number } };
