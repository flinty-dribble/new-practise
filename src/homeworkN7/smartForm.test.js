import { smartForm } from "./smartForm";

describe("smart form", () => {
  it("is a function", () => {
    expect(smartForm).toBeInstanceOf(Function);
  });

  it("create initial markup", () => {
    expect(document.querySelector("input")).toBeTruthy();
    expect(document.querySelector("button")).toBeTruthy();
    expect(document.querySelectorAll("p").length).toBe(3);
  });

  it("adds paragraphs on button click", () => {
    const input = document.querySelector("input");
    input.value = "123";
    document.querySelector("button").dispatchEvent(new Event("click"));
    expect(document.querySelectorAll("p").length).toBe(4);
    expect(document.querySelectorAll("p")[3].innerHTML).toBe(input.value);
    document.querySelectorAll("p")[3].remove();
  });

  it("if input is empty, hide button", () => {
    const input = document.querySelector("input");
    input.value = "";
    input.dispatchEvent(new Event("input"));
    expect(document.querySelector("button").hidden).toBe(true);
  });

  it("if paragraphs more than 5 remove first", () => {
    const input = document.querySelector("input");
    input.value = "123";
    document.querySelector("button").dispatchEvent(new Event("click"));
    document.querySelector("button").dispatchEvent(new Event("click"));
    document.querySelector("button").dispatchEvent(new Event("click"));
    expect(document.querySelectorAll("p").length).toBe(5);
    expect(document.querySelectorAll("p")[0].innerHTML).toBe("2");
  });
});
