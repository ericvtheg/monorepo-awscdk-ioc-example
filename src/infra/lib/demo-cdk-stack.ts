import { Stack, StackProps, Construct } from '@aws-cdk/core';

export class TestCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example sqs resource
    // const queue = new sqs.Queue(this, 'TestCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // example lambda

  }
}
