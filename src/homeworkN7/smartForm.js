export function smartForm() {
  const body = document.querySelector("body");
  const input = document.createElement("input");
  const button = document.createElement("button");

  body.append(input);
  body.append(button);

  button.innerHTML = "click";

  const num = 3;
  const par = [];
  for (let i = 0; i < num; i += 1) {
    par[i] = document.createElement("p");
    body.append(par[i]);
    par[i].innerHTML = i + 1;
  }

  button.addEventListener("click", () => {
    const p = document.querySelectorAll("p");
    par.push(document.createElement("p"));
    par[par.length - 1].innerHTML = input.value;
    body.append(par[par.length - 1]);
    if (p.length > 4) {
      p[0].remove();
    }
  });

  input.addEventListener("input", () => {
    if (input.value === "") {
      button.hidden = true;
    } else {
      button.hidden = false;
    }
  });
}

smartForm();
