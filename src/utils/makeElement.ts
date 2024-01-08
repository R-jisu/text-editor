export function makeElement(element: string, parentElement: any) {
  const newComponent = document.createElement(element);
  parentElement?.appendChild(newComponent);
  return newComponent;
}
