import { Stack, StackProps, Construct } from '@aws-cdk/core';

// make a cdk stack per service
export class AnotherCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here

    // example sqs resource
    // const queue = new sqs.Queue(this, 'TestCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // example s3 resource
    // const bucket = new s3.CfnBucket(this, "MyBucket", {
    //   bucketName: "MyBucket"
    // });


    // example lambda
    // create this as a reusable component
  }
}
