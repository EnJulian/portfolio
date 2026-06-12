export function getTotalPages(itemCount: number, itemsPerPage: number): number {
  if (itemCount <= 0 || itemsPerPage <= 0) {
    return 1;
  }

  return Math.ceil(itemCount / itemsPerPage);
}

export function getPaginatedSlice<T>(
  items: readonly T[],
  page: number,
  itemsPerPage: number,
): T[] {
  if (items.length === 0 || itemsPerPage <= 0) {
    return [];
  }

  const totalPages = getTotalPages(items.length, itemsPerPage);
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * itemsPerPage;

  return items.slice(start, start + itemsPerPage);
}

export function clampPage(page: number, totalPages: number): number {
  return Math.min(Math.max(page, 1), Math.max(totalPages, 1));
}
