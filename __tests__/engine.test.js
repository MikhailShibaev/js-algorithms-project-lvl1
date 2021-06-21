import { it, expect, jest, describe } from "@jest/globals";
import { engine } from "../src/engine";

describe("engine", () => {
    it("engine should return an object with method search()", () => {
        const mockDocks = [
            { id: "doc1", text: "I can't shoot straight unless I've had a pint!" },
            { id: "doc2", text: "Don't shoot shoot shoot that thing at me." },
            { id: 'doc3', text: "I'm your shooter." },
        ];

        jest.spyOn(engine(mockDocks), "search");

        expect(engine(mockDocks).search("shoot")).toEqual(["doc1", "doc2"]);
    });
});
