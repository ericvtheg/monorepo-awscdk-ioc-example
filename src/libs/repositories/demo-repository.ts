import { injectable } from "inversify";

export interface IDemoRepository {
  get<T>(arg1: any): T;
}

// TODO: improve doc block comment here

/**
 * @description Unit tests only test your code, not infrastructure
 * so the repository abstraction make it easier to achieve that goal
 */
@injectable()
export class DemoRepository implements IDemoRepository {
    public get<T>(arg1: any): T {
        // get data from repository
        return arg1;
    }
}
