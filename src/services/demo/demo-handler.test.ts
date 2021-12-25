import { IDemoEntity, DemoEntity } from "../../libs/entities/demo-entity";
import { IDemoRepository, DemoRepository } from "../../libs/repositories/demo-repository";
import { mocked } from 'ts-jest/utils';
import { DemoHandler } from "./demo-handler";

jest.mock("../../libs/repositories/demo-repository")

const mockGetEntity = jest.fn(); // var name must start with "mock"
jest.mock('../../libs/entities/demo-entity', () => {
  return jest.fn().mockImplementation(() => {
    return {getEntity: mockGetEntity};
  });
});

describe("DemoHandler", () => {

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mocked(DemoEntity).mockClear();
    mockGetEntity.mockClear();
  });

  it("should successfully execute event", async () => {
    const entity = new DemoEntity(new DemoRepository());
    const handler: DemoHandler = new DemoHandler(entity);

    const event = { pathParameters: { id: 1} };
    const result = await handler.execute(event as any);
    expect(result.statusCode).toEqual(200);
  });
});
