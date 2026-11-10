export default interface User {
  id: string;
  name: string;
  email: string;
  type:
    | "blade"
    | "veil"
    | "flesh"
    | "mind"
    | "tape"
    | "cult"
    | "immune"
    | "void";
}
