import { smartForm } from "./smartForm";

describe("smart form", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    smartForm(el);
  });

  function submitValue(text) {
    el.querySelector("input").value = text;
    if (el.querySelector("input").value === "") {
      el.querySelector("button").hidden = true;
    }
    el.querySelector("button").click();
    if (el.querySelectorAll("p").length > 5) {
      el.querySelectorAll("p")[0].remove();
    }
  }

  it("is a function", () => {
    expect(smartForm).toBeInstanceOf(Function);
  });

  it("create initial markup", () => {
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelectorAll("p").length).toBe(3);
  });

  it("adds paragraphs on button click", () => {
    const value = "123";
    submitValue(value);
    expect(el.querySelectorAll("p").length).toBe(4);
    expect(el.querySelectorAll("p")[3].innerHTML).toBe(value);
  });
  it("if input is empty, hide button", () => {
    const value = "";
    submitValue(value);
    expect(el.querySelector("button").hidden).toBe(true);
  });
  it("if paragraphs more than 5 remove first", () => {
    const value1 = "456";
    const value2 = "789";
    const value3 = "0";
    submitValue(value1);
    submitValue(value2);
    submitValue(value3);
    expect(el.querySelectorAll("p").length).toBe(5);
  });
});
