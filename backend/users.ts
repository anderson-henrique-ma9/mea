export class User {
  constructor(
    public email: string,
    public name: string,
    public password: string
  ) {}

  matches(another: User): boolean {
    return (
      another !== undefined &&
      another.email === this.email &&
      another.password === this.password
    );
  }
}

export const users = {
  "juliana@gmail.com": new User("juliana@gmail.com", "Juliana", "juliana23"),
  "jose@gmail.com": new User("jose@gmail.com", "José", "jose23")
};
