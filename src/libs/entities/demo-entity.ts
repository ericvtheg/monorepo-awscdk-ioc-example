import { injectable, inject } from "inversify";
import { TYPES } from "../ioc/types";
import { IDemoRepository } from "../repositories/demo-repository";

export interface IDemoEntity {
  get<T>(type: new () => T): T;
}

/**
 * @description
 */

@injectable()
export class DemoEntity implements IDemoEntity {
    constructor(@inject(TYPES.DemoRepository) private repo: IDemoRepository) {}

    public get<T>(type: new () => T): T {

        // get data from repository
        return this.repo.get(type);
    }
}
