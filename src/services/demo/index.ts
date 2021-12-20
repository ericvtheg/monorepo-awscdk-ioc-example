import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { injectable, inject } from "inversify";
import { IDemoEntity } from "../../libs/entities/demo-entity";
import { TYPES } from "../../libs/ioc/types";
import { APIGatewayLambdaHandler } from "../../libs/interfaces/handler-types"

@injectable()
export class DemoHandler implements APIGatewayLambdaHandler {
  constructor(@inject(TYPES.DemoEntity) private entity: IDemoEntity) {}

  public async execute(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult>  {
      const entityId = event?.pathParameters?.id;
      const entityItem = this.entity.getEntity(entityId);
      return {
        statusCode: 200,
        body: entityItem,
      };
  }
}

