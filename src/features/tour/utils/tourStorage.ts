const STORAGE_KEY = "on_app_tours_completed";

export function getCompletedTours(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function isTourCompleted(tourId: string): boolean {
  return getCompletedTours().includes(tourId);
}

export function markTourCompleted(tourId: string): void {
  const completed = getCompletedTours();
  if (!completed.includes(tourId)) {
    completed.push(tourId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }
}

export function resetTour(tourId: string): void {
  const completed = getCompletedTours().filter((id) => id !== tourId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
}

export function resetAllTours(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
}
