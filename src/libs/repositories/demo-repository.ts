import { injectable, inject } from "inversify";
import { TYPES } from "../ioc/types";
import { S3 } from "aws-sdk";
import "reflect-metadata";

export interface IDemoRepository {
  get(key: string, resourceName: string): Promise<S3.Body | undefined>
}


// TODO: improve doc block comment here

// get data using wrapped service

/**
 * @description Unit tests only test your code, not infrastructure
 * so the repository abstraction make it easier to achieve that goal
 */
@injectable()
export class DemoRepository implements IDemoRepository {
  constructor(@inject(TYPES.S3) private s3: S3) {}

  public async get(key: string, resourceName: string): Promise<S3.Body | undefined> {
    console.log("hit3");
    const params: S3.GetObjectRequest = {
      Bucket: resourceName,
      Key: key,
    };

    const response = await this.s3.getObject(params).promise();
    // TODO: handle null case
    return response.Body;
  }

  // put

  // delete

  // getMetadata

  // etc
}
