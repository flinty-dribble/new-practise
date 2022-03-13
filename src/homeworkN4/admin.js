export function adminInfo() {
  const user = {
    name: "John",
    age: 23,
  };
  const admin = { role: "admin", ...user };
  return admin;
}
