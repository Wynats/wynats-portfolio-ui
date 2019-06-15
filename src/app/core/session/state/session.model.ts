export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public token: string
  ) {}
}

export class SessionState {
  constructor(public user: User) {}
}
export function createInitialState(): SessionState {
  return new SessionState(null);
}
