export function showMaxHeight(element) {
  element.style.maxHeight = `${element.scrollHeight}px`;
}

export function hideMaxHeight(element) {
  element.style.maxHeight = null;
}

export function showMaxWidth(element) {
  element.style.maxWidth = `${element.scrollHeight}px`;
}

export function hideMaxWidth(element) {
  element.style.maxWidth = null;
}
