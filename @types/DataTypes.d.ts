type Participant = {
  id: number;
  created_at: string;
  name: string;
  age: number;
  am: number;
  pm: number;
};

type ParticipantPostRequest = { body: { name: string; age: number } };

type ParticipantUpdateRequest = {
  params: { id: number };
} & ParticipantPostRequest;

type ParticipantRequestById = { params: { id: number } };

type ParticipantRequest = { query?: { name?: string; age?: number } };
