import { DemoEntity } from "./demo-entity";
import { DemoRepository } from "../repositories/demo-repository";
import { mocked } from 'ts-jest/utils';

// var name must start with "mock"
const mockRepo = { get: jest.fn() } as unknown as DemoRepository;

jest.mock('../repositories/demo-repository', () => {
  return jest.fn().mockImplementation(() => {
    return { demoRepo: mockRepo };
  });
});

describe("DemoEntity", () => {
  const demoEntity: DemoEntity = new DemoEntity(mockRepo);
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockRepo.mockClear();
  });

  describe("get", () => {
    it("should call child repository", async () => {
      mocked(mockRepo.get).mockReturnValueOnce(Promise.resolve("expectedResponse"));
      const response = await demoEntity.get("someId");
      expect(response).toEqual("expectedResponse");
    })
  });
})
