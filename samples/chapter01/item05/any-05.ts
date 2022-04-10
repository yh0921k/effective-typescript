// interface ComponentProps {
//   onSelectItem: (item: any) => void;
// }

interface ComponentProps {
  onSelectItem: (id: number) => void;
}

function renderSelector(props: ComponentProps) {
  // ...
}

let selectedId = 0;

function handleSelectItem(item: any) {
  selectedId = item.id;
}

renderSelector({ onSelectItem: handleSelectItem });
