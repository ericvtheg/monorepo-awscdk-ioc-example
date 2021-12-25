import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export interface APIGatewayLambdaHandler {
  execute(event: APIGatewayProxyEvent, context?: Context): Promise<APIGatewayProxyResult>;
}

// sqs Handler

// cron handler

// sns handler
