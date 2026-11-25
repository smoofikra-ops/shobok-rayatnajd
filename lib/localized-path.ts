export function getLocalizedPath(locale: string, path = "/"): string {
  if (locale !== "en") {
    return path;
  }

  return path === "/" ? "/en" : `/en${path}`;
}
