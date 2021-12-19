import { injectable, inject } from "inversify";

export interface IDemoRepository {
  get<T>(type: new () => T): T;
}

/**
 * @description
 */

@injectable()
export class DemoRepository implements IDemoRepository {
    // constructor() {}

    public get<T>(type: new () => T): T {
        // get data from repository
        return new type();
    }
}
