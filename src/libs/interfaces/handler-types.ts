import { APIGatewayProxyEvent, APIGatewayProxyStructuredResultV2, Context } from "aws-lambda";

export interface APIGatewayLambdaHandler {
  execute(event: APIGatewayProxyEvent, context?: Context): Promise<APIGatewayProxyStructuredResultV2>;
}

// sqs Handler

// cron handler

// sns handler
