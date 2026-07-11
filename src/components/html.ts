export const joinHtml = <T>(items: readonly T[], render: (item: T, index: number) => string) =>
  items.map(render).join('');
