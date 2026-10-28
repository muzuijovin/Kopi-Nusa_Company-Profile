// Foto HD dari Unsplash. Next/Image yang akan me-resize sesuai layar,
// jadi sumbernya sengaja dibuat besar agar tidak pernah blur.
export const unsplash = (id: string, width = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;

export const isOptimizableImage = (src: string) => src.startsWith("https://images.unsplash.com/");
