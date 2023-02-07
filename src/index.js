"use strict";

module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const unitsAfterTen = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundred = ["hundred"];

    let num = String(number);
    if (num.length === 1) {
        return units[number];
    } else if (num.length === 2 && num[0] === "1") {
        return unitsAfterTen[Number(num[1])];
    } else if (num.length === 2 && num[1] !== "0") {
        return `${tens[Number(num[0])]} ${units[Number(num[1])]}`;
    } else if (num.length === 2 && num[1] === "0") {
        return tens[Number(num[0])];
    } else if (num.length === 3 && num[1] === "0" && num[2] === "0") {
        return `${units[Number(num[0])]} hundred`;
    } else if (num.length === 3 && num[1] === "0" && num[2] !== "0") {
        return `${units[Number(num[0])]} hundred ${units[Number(num[2])]}`;
    } else if (num.length === 3 && num[1] === "1") {
        return `${units[Number(num[0])]} hundred ${
            unitsAfterTen[Number(num[2])]
        }`;
    } else if (num.length === 3 && num[1] !== "1" && num[2] === "0") {
        return `${units[Number(num[0])]} hundred ${tens[Number(num[1])]}`;
    } else if (num.length === 3 && num[2] !== "0") {
        return `${units[Number(num[0])]} hundred ${tens[Number(num[1])]} ${
            units[Number(num[2])]
        }`;
    }
};
