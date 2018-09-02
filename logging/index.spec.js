jest.unmock("./index.js");
require("./index.js");

describe("Log", () => {
  beforeEach(() => {
    process.stdout.write = jest.fn();
    global._utils = {
      application: {}
    };
    Date.prototype = jest.fn();
    Date.toISOString = jest.fn(() => "ABC");
  });

  it("Should output to stdout when called", () => {
    log("Hello");
    expect(process.stdout.write).toHaveBeenCalled();
    expect(process.stdout.write.mock.calls[0][0]).toContain(
      "application@version["
    );
    expect(process.stdout.write.mock.calls[0][0]).toContain("] -> Hello");
  });
  it("Should output to stdout when called with object", () => {
    log({ hello: "world" });
    expect(process.stdout.write).toHaveBeenCalled();
    expect(process.stdout.write.mock.calls[0][0]).toContain(
      "application@version["
    );
    expect(process.stdout.write.mock.calls[0][0]).toContain(
      '] -> {"hello":"world"}'
    );
  });
});

describe("Error", () => {
  beforeEach(() => {
    process.stderr.write = jest.fn();
    global._utils = {
      application: {}
    };
    Date.prototype = jest.fn();
    Date.toISOString = jest.fn(() => "ABC");
  });

  it("Should output to stdout when called", () => {
    error("Hello");
    expect(process.stderr.write).toHaveBeenCalled();
    expect(process.stderr.write.mock.calls[0][0]).toContain(
      "application@version["
    );
    expect(process.stderr.write.mock.calls[0][0]).toContain("] -> Hello");
  });
  it("Should output to stdout when called with object", () => {
    error({ hello: "world" });
    expect(process.stderr.write).toHaveBeenCalled();
    expect(process.stderr.write.mock.calls[0][0]).toContain(
      "application@version["
    );
    expect(process.stderr.write.mock.calls[0][0]).toContain(
      '] -> {"hello":"world"}'
    );
  });
});
