import { injectable, inject } from "inversify";
import { TYPES } from "../ioc/types";
import { IDemoRepository } from "../repositories/demo-repository";

export interface IDemoEntity {
  getEntity<T>(type: new () => T): T;
}

// add interface for expected payload, use this to pass down to repository

/**
 * @description a domain entity.
 * Example: the DemoRepository is used to interact with s3 buckets.
 * This demo entity is associated with documents that are stored in a specific s3 bucket.
 */

@injectable()
export class DemoEntity implements IDemoEntity {
    constructor(@inject(TYPES.DemoRepository) private repo: IDemoRepository) {}

    public getEntity<T>(type: new () => T): T {

        // get data using repository
        return this.repo.get(type);
    }
}
