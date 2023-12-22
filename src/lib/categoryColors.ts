// categoryColors.ts
export type Category = 'category1' | 'category2' | 'category3' | 'svelte' | 'default';

export const categoryColors: Record<Category, string> = {
    'category1': 'bg-primary',
    'category2': 'bg-secondary',
    'category3': 'bg-tertiary',
    'svelte': 'bg-success',
    'default': 'bg-primary',
    // Add more categories as needed
};