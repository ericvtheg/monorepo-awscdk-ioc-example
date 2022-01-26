import { DemoHandler } from "services/demo/demo-handler";
import { container } from "libs/ioc/container";
import { TYPES } from "libs/ioc/types";

const demoHandler: DemoHandler = container.get<DemoHandler>(TYPES.DemoHandler);
const executeDemoHandler = demoHandler.execute;

console.log("hit");

export { executeDemoHandler } ;
