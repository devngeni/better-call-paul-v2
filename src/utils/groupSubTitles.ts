export function groupItemsBySubtitle(items: any[]) {
  const groupedItems: any = {};
  // Group items by their subTitle

  items &&
    items.forEach((item: any) => {
      const subTitle = item.subTitle.trim(); // Remove leading and trailing whitespaces

      if (!groupedItems[subTitle]) {
        groupedItems[subTitle] = [];
      }
      groupedItems[subTitle].push(item.content);
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
