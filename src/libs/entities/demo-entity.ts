import { injectable, inject } from "inversify";
import { TYPES } from "../ioc/types";
import { IDemoRepository } from "../repositories/demo-repository";

export interface IDemoEntity {
  getEntity<T>(type: new () => T): T;
}

/**
 * @description
 */

@injectable()
export class DemoEntity implements IDemoEntity {
    constructor(@inject(TYPES.DemoRepository) private repo: IDemoRepository) {}

    public getEntity<T>(type: new () => T): T {

        // get data using repository
        return this.repo.get(type);
    }
}
