type Color = typeof COLORS[number];

export const colorCode = (color: Color): number => COLORS.indexOf(color);

export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'] as const;