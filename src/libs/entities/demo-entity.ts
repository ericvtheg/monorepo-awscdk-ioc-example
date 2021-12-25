import { injectable, inject } from "inversify";
import { TYPES } from "../ioc/types";
import { IDemoRepository } from "../repositories/demo-repository";

export interface IDemoEntity {
  get(arg1: string): payload;
}

interface payload {
  id: string;
  body: string;
}

/**
 * @description a domain entity.
 * Example: the DemoRepository is used to interact with s3 buckets.
 * This demo entity is associated with documents that are stored in a specific s3 bucket.
 */

@injectable()
export class DemoEntity implements IDemoEntity {
    private readonly resourceName = "someResource";
    constructor(@inject(TYPES.DemoRepository) private repo: IDemoRepository) {}

    public get(id: string): payload {

        // get data using repository
        return this.repo.get<payload>(id, this.resourceName);
    }
}
