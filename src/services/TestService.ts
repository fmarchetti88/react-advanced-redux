const items = ['Uno', 'Due', 'Tre'];

export function getItems() {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => resolve(items), 1000);
  });
}
