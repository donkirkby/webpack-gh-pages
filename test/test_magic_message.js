import {makeMagic} from '../src/magic_message';

describe("makeMagic function", function() {
    it('should add " magic" to current text', function() {
        expect(makeMagic("magic")).toBe("magic magic");
    });

    it('should replace "regular" with "magic"', function() {
        expect(makeMagic("regular")).toBe("magic");
    });
});
