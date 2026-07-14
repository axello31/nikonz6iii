export interface Shortcut {
  id: string;
  title: string;
  subtitle?: string;
  emoji: string;
  href: string;
}

// Gökhan will dictate these one by one — keep this list append-only as he shares them.
export const shortcuts: Shortcut[] = [];
