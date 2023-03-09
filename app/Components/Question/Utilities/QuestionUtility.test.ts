import { QuestionUtility } from "./QuestionUtility";

describe("QuestionUtility", () => {
  it("should return true when componential id is given", () => {
    expect(QuestionUtility.isComponentialId("1")).toBe(true);
  });

  it("should return false when a non componential id is given", () => {
    expect(QuestionUtility.isComponentialId("11")).toBe(false);
  });

  it("should return true when componential image id is given", () => {
    expect(QuestionUtility.isComponentialImageId("1")).toBe(true);
  });

  it("should return false when a non componential image id is given", () => {
    expect(QuestionUtility.isComponentialImageId("10")).toBe(false);
  });

  it("should return true when experiential image id is given", () => {
    expect(QuestionUtility.isExperientialImageId("11")).toBe(true);
  });

  it("should return false when a non experiential image id is given", () => {
    expect(QuestionUtility.isExperientialImageId("20")).toBe(false);
  });
});
