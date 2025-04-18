import getAttrNameFromSelector from "@/utils/getAttrNameFrom Selector.js";

const getParams = (element, dataAttrSelector) => {
  return JSON.parse(
      element.getAttribute(
          getAttrNameFromSelector(dataAttrSelector)
      )
  )
}

export default getParams
