import { IDemoEntity } from "../../libs/entities/demo-entity";
import { mocked } from 'ts-jest/utils';
import { APIGatewayProxyEvent } from "aws-lambda";
import { DemoHandler } from "./demo-handler";
import { StatusCodes } from 'http-status-codes';

const mockEntity = {
  get: jest.fn()
} as IDemoEntity;

jest.mock('../../libs/entities/demo-entity', () => {
  return jest.fn().mockImplementation(() => {
    return {DemoEntity: mockEntity};
  });
});

describe("DemoHandler", () => {

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    // mocked(DemoEntity).mockClear();
    // mockEntity.mockClear();
  });

  it("should successfully process event", async () => {
    mocked(mockEntity.get).mockReturnValueOnce(Promise.resolve("expectedResponse"));
    const handler: DemoHandler = new DemoHandler(mockEntity);
    const event: Partial<APIGatewayProxyEvent> = { pathParameters: { id: "1"} };
    const result = await handler.execute(event as any);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual("expectedResponse");
  });

  it("should fail with 400 if no entityId was passed", async () => {
    const handler: DemoHandler = new DemoHandler(mockEntity);
    const event: Partial<APIGatewayProxyEvent> = { pathParameters: {} };
    const result = await handler.execute(event as any);

    expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });

  it("should fail with 400 if no path param was passed", async () => {
    const handler: DemoHandler = new DemoHandler(mockEntity);
    const event: Partial<APIGatewayProxyEvent> = { };
    const result = await handler.execute(event as any);

    expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });

  it("should fail with 404 if no entity was found", async () => {
    mocked(mockEntity.get).mockReturnValueOnce(Promise.resolve(undefined));
    const handler: DemoHandler = new DemoHandler(mockEntity);
    const event: Partial<APIGatewayProxyEvent> = { pathParameters: { id: "1"} };
    const result = await handler.execute(event as any);

    expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
  })
});
