import { DemoRepository, IDemoRepository } from "./demo-repository";

describe("DemoRepository", () => {
  const demoRepository: IDemoRepository = new DemoRepository();

  describe("get", () => {
    it("should successfully call", () => {{
      const result = demoRepository.get<any>("example");
      expect(result).toEqual("example");
    }});
  });
});
