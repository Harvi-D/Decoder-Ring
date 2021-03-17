const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should shift to the 'right' if shift is a positive number", () => {
        const expected = 'wklqnixo';
        const actual = caesar("thinkful", 3);
        expect(actual).to.eql(expected);
    });
    it("should shift to the 'left' if shift is a nagative number", () => {
        const expected = 'qefkhcri';
        const actual = caesar("thinkful", -3);
        expect(actual).to.eql(expected);
    });
    it("should decode a string", () => {
        const expected = 'thinkful';
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters and include spaces when encoding", () =>{
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar("ThIs Is A sEcReT mEsSaGe!", 8);
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters and include spaces when decoding", () => {
        const expected = 'this is a secret message!';
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.eql(expected);
    });
    it("should return false if 'shift' is undefined", () => {
        const actual = caesar("thinkful");
        expect(actual).to.be.false;
    });
    it("should return false if 'shift' is greater than 25", () => {
        const actual = caesar("thinkful", 99);
        expect(actual).to.be.false;
    });
    it("should return false if 'shift' is less than -25", () => {
        const actual = caesar("thinkful", -26);
        expect(actual).to.be.false;
    });
});