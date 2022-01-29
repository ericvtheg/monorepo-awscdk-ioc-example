import "reflect-metadata";
import { DemoHandler } from "services/demo/demo-handler";
import { container } from "libs/ioc/container";
import { TYPES } from "libs/ioc/types";
import { injectable, decorate } from "inversify";
import { DemoRepository, IDemoRepository } from "./libs/repositories/demo-repository";
import { S3 } from "aws-sdk";
import { IDemoEntity, DemoEntity } from "./libs/entities/demo-entity";

console.log("hit before demoHandler");

console.log(container);

// console.log(container.isCurrentBound(TYPES.DemoHandler))

const demoRepo = new DemoRepository(new S3());
const demoEntity = new DemoEntity(demoRepo);
const demoHandler = new DemoHandler(demoEntity);
const executeDemoHandler = demoHandler.execute;

// decorate(injectable(), executeDemoHandler);
// const demoHandler = container.get<DemoHandler>(TYPES.DemoHandler);

console.log("hit after demoHandler");

export { executeDemoHandler } ;
