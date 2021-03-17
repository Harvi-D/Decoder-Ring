const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("should encode a message", () => {
        const expected = 'jrufscpw'
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });
    it("should keep spaces and ignore capitals", () => {
        const expected = 'elp xhm xf mbymwwmfj dne'
        const actual = substitution("YoU aRe An ExCeLlEnT sPy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });
    it("should decode a message", () => {
        const expected = 'thinkful';
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected);
    });
    it("should encode a message with special characters", () => {
        const expected = "y&ii$r&";
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.eql(expected);
    });
    it("should decode a message with special characters", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); 
        expect(actual).to.eql(expected);
    });
    it("should return false if the alphabet argument is not 26 characters long", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });
    it("should return false if the alphabet argument contains duplicate letters", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
});