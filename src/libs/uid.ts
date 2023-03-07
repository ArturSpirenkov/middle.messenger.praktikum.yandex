// TODO: use another way of getting id (uuid lib), this approach can make collisions

export default function uid (): string {
  return String(
    Date.now().toString(32) +
      Math.random().toString(16)
  ).replace(/\./g, '');
}
