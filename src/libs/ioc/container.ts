import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { IDemoRepository, DemoRepository } from "../repositories/demo-repository";
import { IDemoEntity, DemoEntity } from "../entities/demo-entity";

const container = new Container();

container.bind<IDemoRepository>(TYPES.DemoRepository).to(DemoRepository);
container.bind<IDemoEntity>(TYPES.DemoEntity).to(DemoEntity);

export { container };
