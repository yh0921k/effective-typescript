function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  if (elOrId === null) {
    return document.body;
  } else if (typeof elOrId === 'object') {
    return elOrId;
  } else {
    const el = document.getElementById(elOrId);
    if (el === null) {
      throw new DOMException('Element is null');
    }
    return el;
  }
}
