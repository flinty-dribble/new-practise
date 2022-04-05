export function destruct() {
  const admin = {
    name: "John",
    age: 23,
    role: "admin",
  };
  const { name, age, role } = admin;
  return `${name}, ${age}, ${role}`;
}
