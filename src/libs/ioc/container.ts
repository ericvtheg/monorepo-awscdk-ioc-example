import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { IDemoRepository, DemoRepository } from "../repositories/demo-repository";
import { IDemoEntity, DemoEntity } from "../entities/demo-entity";
import { DemoHandler } from "../../services/demo/demo-handler";
import { S3 } from "aws-sdk";

const container = new Container();
console.log("hit in container before");

container.bind<S3>(TYPES.S3).to(S3);
container.bind<IDemoRepository>(TYPES.DemoRepository).to(DemoRepository);
container.bind<IDemoEntity>(TYPES.DemoEntity).to(DemoEntity);

// Lambda Handlers
container.bind<DemoHandler>(TYPES.DemoHandler).to(DemoHandler);

console.log("hit in container after");

export { container };
