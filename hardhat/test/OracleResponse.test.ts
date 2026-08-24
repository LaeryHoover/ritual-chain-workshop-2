import { expect } from "chai";

describe("Oracle response examples", function () {
  function isValidPrice(value: unknown): boolean {
    return (
      typeof value === "number" &&
      Number.isFinite(value) &&
      value >= 0
    );
  }

  it("accepts a normal price", function () {
    expect(isValidPrice(4200)).to.equal(true);
  });

  it("accepts zero", function () {
    expect(isValidPrice(0)).to.equal(true);
  });

  it("rejects negative values", function () {
    expect(isValidPrice(-10)).to.equal(false);
  });

  it("rejects undefined", function () {
    expect(isValidPrice(undefined)).to.equal(false);
  });

  it("rejects strings", function () {
    expect(isValidPrice("4200")).to.equal(false);
  });

  it("rejects NaN", function () {
    expect(isValidPrice(Number.NaN)).to.equal(false);
  });

  it("rejects infinity", function () {
    expect(isValidPrice(Number.POSITIVE_INFINITY))
      .to.equal(false);
  });
});
