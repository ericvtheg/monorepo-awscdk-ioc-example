import { injectable, inject } from "inversify";

export interface IDemoRepository {
  get<T>(type: new () => T): T;
}

/**
 * @description Remember that unit tests only test your code, not infrastructure
 * so the repository abstraction make it easier to achieve that goal
 */

@injectable()
export class DemoRepository implements IDemoRepository {
    public get<T>(type: new () => T): T {
        // get data from repository
        return new type();
    }
}
