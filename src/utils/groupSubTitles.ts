export function groupItemsBySubtitle(items: any[]) {
  const groupedItems: any = {};
  // Group items by their subTitle

  items &&
    items.forEach((item: { subTitle: string | number; content: any }) => {
      if (!groupedItems[item.subTitle]) {
        groupedItems[item.subTitle] = [];
      }
      groupedItems[item.subTitle].push(item.content);
    });

  // Transform grouped items into desired format
  const formattedItems = Object.keys(groupedItems).map((subTitle) => {
    return {
      subTitle: subTitle,
      content: groupedItems[subTitle].flat(),
    };
  });

  return formattedItems;
}
