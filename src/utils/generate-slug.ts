export function generateSlug(name: string): string {
  return name
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
}
