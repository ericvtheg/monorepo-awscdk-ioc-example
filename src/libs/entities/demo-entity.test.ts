import { DemoEntity } from "./demo-entity";
import { DemoRepository } from "../repositories/demo-repository";
import { mocked } from 'ts-jest/utils';

const mockRepoGet = jest.fn(); // var name must start with "mock"
jest.mock('../repositories/demo-repository.ts', () => {
  return jest.fn().mockImplementation(() => {
    return {get: mockRepoGet};
  });
});

describe("DemoEntity", () => {
  const demoEntity: DemoEntity = new DemoEntity(new DemoRepository());
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mocked(DemoRepository).mockClear();
    mockRepoGet.mockClear();
  });

  describe("get", () => {
    demoEntity.get()
  });
})
