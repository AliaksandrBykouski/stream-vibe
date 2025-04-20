import getIdFromTitle from "@/utils/getIdFromTitle.js";

const getTabsElementsIdsFromTitle = (title) => {
  const titleFormated = getIdFromTitle(title)

  return {
    buttonId: `${titleFormated}-tab` ,
    contentId: `${titleFormated}-tabpanel`
  }
}

export default getTabsElementsIdsFromTitle
