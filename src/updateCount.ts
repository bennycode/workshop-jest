export function updateCount(count: number, sign: string) {
  return (sign === "+") ? count + 1 : count - 1;
}