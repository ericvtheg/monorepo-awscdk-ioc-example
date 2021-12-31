import { DemoRepository, IDemoRepository } from "./demo-repository";


// TODO: anyway I can type this to not be any?
// var name must start with "mock"
const mockS3 = { getObject: jest.fn() } as any;

jest.mock('aws-sdk', () => {
  return { S3: jest.fn(() => mockS3) };
});

describe("DemoRepository", () => {
  const demoRepository: IDemoRepository = new DemoRepository(mockS3);

  // TODO: figure out how to call mockClear

  describe("get()", () => {
    it("should successfully call", async () => {{
      mockS3.getObject.mockReturnValueOnce({
        promise: jest.fn().mockReturnValueOnce(Promise.resolve({ Body: "expectedResponse" }))
      });

      const result = await demoRepository.get("example", "someBucket");
      expect(result).toEqual("expectedResponse");
      expect(mockS3.getObject).toBeCalled();
    }});
  });
});
