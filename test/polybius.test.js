const expect = require("chai").expect;
const polybius = require("../src/polybius");


describe("polybius", () => {
    it("should encode a string", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.eql(expected);
    });
    it("should include spaces and ignore capitals", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("HeLlO wOrLd");
        expect(actual).to.eql(expected);
    });
    it("should decode a message", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.eql(expected);
    });
    it("should translate '42' to both 'i' and 'j'", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.eql(expected);
    });
    it("should return false if the length of the encoded message is odd", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
});