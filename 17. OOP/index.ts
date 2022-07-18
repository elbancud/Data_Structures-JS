class User {
  protected name;
  protected age;
  protected status;
  constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
  }
  public isABadMofo = () => `${this.name} is a bad mofo`;
}

class UserDictates extends User {}
