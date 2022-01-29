import { injectable, inject } from "inversify";
import { TYPES } from "../ioc/types";
import { IDemoRepository } from "../repositories/demo-repository";
import { S3 } from "aws-sdk";
import "reflect-metadata";

// TODO: improve return types & try not to import S3 here
export interface IDemoEntity {
  get(arg1: string): Promise<S3.Body | undefined>;
}

/**
 * @description a domain entity.
 * Example: the DemoRepository is used to interact with s3 buckets.
 * This demo entity could be associated with documents that are stored in a specific s3 bucket.
 */

@injectable()
export class DemoEntity implements IDemoEntity {
  private readonly resourceName = "someResource";
  constructor(@inject(TYPES.DemoRepository) private demoRepo: IDemoRepository) {}

  public async get(id: string): Promise<S3.Body | undefined> {
    console.log("hit2");
    // get data using repository
    const body = await this.demoRepo.get(id, this.resourceName);
    // business logic
    return body;
  }
}
