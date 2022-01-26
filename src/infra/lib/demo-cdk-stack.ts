import { Stack, StackProps, Construct } from '@aws-cdk/core';
import { NodejsFunction } from "@aws-cdk/aws-lambda-nodejs";
import * as lambda from '@aws-cdk/aws-lambda';

export class TestCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, 'demoLambdaHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      // timeout: Duration.seconds(15),
      memorySize: 128,
      entry: './src/index.ts',
      handler: 'index.executeDemoHandler',
    });
  }
}
