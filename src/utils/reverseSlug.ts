export function reverseSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => capitalize(word))
    .join(" ");
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
