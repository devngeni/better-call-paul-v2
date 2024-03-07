export function groupItemsBySubtitle(items: any[]) {
  const groupedItems: any = {};

  items &&
    items.forEach((item: any) => {
      const subTitle = item.subTitle.trim(); 

      if (!groupedItems[subTitle]) {
        groupedItems[subTitle] = [];
      }
      groupedItems[subTitle].push(item.content);
    });

  const formattedItems = Object.keys(groupedItems).map((subTitle) => {
    return {
      subTitle: subTitle,
      content: groupedItems[subTitle].flat()
    };
  });

  return formattedItems;
}

export function groupRentablesSubtitle(items: any[]) {
  const groupedItems: any = {};
  items &&
    items.forEach((item: any) => {
      const subTitle = item.subTitle.trim();
      if (!groupedItems[subTitle]) {
        groupedItems[subTitle] = [];
      }
      groupedItems[subTitle].push({
        content: item.content[0].name,
        name: item.content[0].name,
        hotelDescription: item.content[0].description,
        image: item.content[0].imagePath
      });
    });
  const formattedItems = Object.keys(groupedItems).map((subTitle) => {
    return {
      subTitle: subTitle,
      content: groupedItems[subTitle]
    };
  });
  return formattedItems;
}
