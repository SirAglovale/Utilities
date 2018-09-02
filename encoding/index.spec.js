jest.unmock("./index");
const encoding = require("./index");

describe("Encoding", () => {
  const Base64 = "SGVsbG8=";
  const Hex = "48656c6c6f";
  const Plain = "Hello";
  describe("From Base64", () => {
    it("Should convert between base64 and ascii", () => {
      const plain = encoding.b64toAscii(Base64);
      expect(plain).toEqual(Plain);
    });
    it("Should convert between base64 and utf8", () => {
      const utf8 = encoding.b64toUTF8(Base64);
      expect(utf8).toEqual(Plain);
    });
    it("Should convert between base64 and hex", () => {
      const hex = encoding.b64toHex(Base64);
    });
  });
  describe("From Ascii", () => {
    it("Should convert between Ascii and Base64", () => {
      expect(encoding.asciitoB64(Plain)).toEqual(Base64);
    });
    it("Should convert between Ascii and utf8", () => {
      expect(encoding.asciitoUTF8(Plain)).toEqual(Plain);
    });
    it("Should convert between Ascii and hex", () => {
      expect(encoding.asciitoHex(Plain)).toEqual(Hex);
    });
  });
  describe("From Hex", () => {
    it("Convert to Ascii", () => {
      expect(encoding.hextoAscii(Hex)).toEqual(Plain);
    });
    it("Convert to Base64", () => {
      expect(encoding.hextoB64(Hex)).toEqual(Base64);
    });
    it("Convert to UTF8", () => {
      expect(encoding.hextoUTF8(Hex)).toEqual(Plain);
    });
  });
  describe("From UTF8", () => {
    it("Convert to Ascii", () => {
      expect(encoding.utf8toAscii(Plain)).toEqual(Plain);
    });
    it("Convert to Base64", () => {
      expect(encoding.utf8toB64(Plain)).toEqual(Base64);
    });
    it("Convert to hex", () => {
      expect(encoding.utf8toHex(Plain)).toEqual(Hex);
    });
  });
});
