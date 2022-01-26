import { APIGatewayProxyEvent, APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import { injectable, inject } from "inversify";
import { IDemoEntity } from "../../libs/entities/demo-entity";
import { TYPES } from "../../libs/ioc/types";
import { APIGatewayLambdaHandler } from "../../libs/interfaces/handler-types"
import { StatusCodes } from 'http-status-codes';

// TODO: figure out clean way to throw/handle errors that API Gateway will parse as http status codes

@injectable()
export class DemoHandler implements APIGatewayLambdaHandler {
  constructor(@inject(TYPES.DemoEntity) private entity: IDemoEntity) {}

  public async execute(event: APIGatewayProxyEvent): Promise<APIGatewayProxyStructuredResultV2>  {
      const entityId = event.pathParameters?.id;
      if (!entityId){
        return { statusCode: StatusCodes.BAD_REQUEST }
      }

      const entityItem = await this.entity.get(entityId);
      if (!entityItem) {
        return { statusCode: StatusCodes.NOT_FOUND }
      }

      return {
        statusCode: 200,
        body: entityItem.toString(),
      };
  }
}

