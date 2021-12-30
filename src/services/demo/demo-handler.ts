import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { injectable, inject } from "inversify";
import { IDemoEntity } from "../../libs/entities/demo-entity";
import { TYPES } from "../../libs/ioc/types";
import { APIGatewayLambdaHandler } from "../../libs/interfaces/handler-types"

// TODO: figure out clean way to throw/handle errors that API Gateway will parse as http status codes

@injectable()
export class DemoHandler implements APIGatewayLambdaHandler {
  constructor(@inject(TYPES.DemoEntity) private entity: IDemoEntity) {}

  public async execute(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult>  {
      const entityId = event?.pathParameters?.id;
      if(!entityId){
        throw new Error();
      }
      // const entityItem = this.entity.getEntity(entityId);
      return {
        statusCode: 200,
        body: entityId,
      };
  }
}

