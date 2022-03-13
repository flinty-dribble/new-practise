export function smartForm(el) {
  const input = document.createElement("input");
  el.appendChild(input);

  const button = document.createElement("button");
  el.appendChild(button);

  const num = 3;
  const par = [];
  for (let i = 0; i < num; i += 1) {
    par[i] = document.createElement("p");
    el.appendChild(par[i]);
  }

  button.addEventListener("click", () => {
    par.push(document.createElement("p"));
    par[par.length - 1].innerHTML = input.value;
    el.appendChild(par[par.length - 1]);
  });
}
