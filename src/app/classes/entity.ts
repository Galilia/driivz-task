export class Entity<T> {
  id: number;

  toString(obj: T) {
    for (let variable in obj) {
      return variable.toString() + obj[variable].toString();
    }
  }
}

