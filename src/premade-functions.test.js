import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { findLongestWord, charCount, mergeSortedArrays, flattenArray, groupBy, debounce } from "./premade-functions.js";

describe("findLongestWord", () => {

    it("should recieve a string and return the longest word", () => {
        // TODO
        // expect(...)
        // Insert string to receive
        // expect the longest word to be = the longest word in the string
        expect(findLongestWord("The quick brown fox")).toBe("quick");
    })

})


describe("charCount", () => {

    it("should recieve a string and return an object with each letter in string as keys and letter count as value", () => {
        // insert string to receive
        // expect the returned object to be = the correct character count
        expect(charCount("hello world")).toEqual({
            h: 1,
            e: 1,
            l: 3,
            o: 2,
            ' ': 1,
            w: 1,
            r: 1,
            d: 1
        })
    })

})


describe("mergeSortedArrays", () => {

    it("should recieve two sorted arrays and return a single sorted array", () => {
        // insert two sorted arrays to receive
        // expect the returned array to be = the two arrays merged and sorted
        expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

})


describe("flattenArray", () => {

    it("should recieve a nested array and return a flat array", () => {
        // insert nested array to receive
        // expect the returned array to be = the nested array unnested (one level)
        expect(flattenArray([1, [ 2, 3, [4, 5], 6], 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    })

})


describe("groupBy", () => {

    it("should recieve an array and a property name, and return an object grouped by the property", () => {
        // array to recieve
        const array = [
            {
                name: "Alice",
                age: 25,
                city: "Hamburg"
            },
            {
                name: "Bob",
                age: 30,
                city: "Copenhagen"
            },
            {
                name: "Charlie",
                age: 25,
                city: "Hamburg"
            }
        ];
        // property to group by
        const property = "city";

        // expect the returned array to be grouped in an object by the property
        expect(groupBy(array, property)).toEqual({
            Hamburg: [
                {
                    name: "Alice",
                    age: 25,
                    city: "Hamburg"
                },
                {
                    name: "Charlie",
                    age: 25,
                    city: "Hamburg"
                }
            ],
            Copenhagen: [
                {
                    name: "Bob",
                    age: 30,
                    city: "Copenhagen"
                }
            ]
        });
    })

})


describe("debounce", () => {

    // mock = test function to spy on calls and find out when its called
    let mock = vi.fn()
    let mockDelay

    // before each test, setup fake timers so we can control time in tests
    beforeEach(() => {
        vi.useFakeTimers()
        // set the debounce function to run the mock function with 2 second delay
        mockDelay = debounce(mock, 2000)
    })
    // after each test, restore real timers and clear mock calls
    afterEach(() => {
        vi.useRealTimers()
        vi.clearAllMocks()
    })

    it("should not call the function immediately",  () => {
        // call the function immediately
        mockDelay()
        // advance times by 1.9 seconds
        vi.advanceTimersByTime(1999)
        // call function again
        mockDelay()
        // expect that the mock function has not been called yet
        expect(mock).not.toHaveBeenCalled()
    })

    it("should call the function after the delay has passed",  () => {
        // call the function
        mockDelay()
        // advance time by 2 seconds
        vi.advanceTimersByTime(2000)
        // expect that the mock function has been called once
        expect(mock).toHaveBeenCalledOnce()
    })

    it("should call the function once",  () => {
        mockDelay()
        // advance time by 8 seconds
        vi.advanceTimersByTime(8000)
        // expect that the mock function still has only been called once
        expect(mock).toHaveBeenCalledOnce()
    })

})