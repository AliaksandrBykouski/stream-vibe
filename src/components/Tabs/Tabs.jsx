import './Tabs.scss'
import classNames from 'classnames'
import getTabsElementsIdsFromTitle from "./utils/getTabsElementsIdsFromTitle.js";
import TabsNavigations from "@/components/Tabs/components/TabsNavigations";

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
    isEnableOnlyInMobile = false
  } = props

  return (
    <div
      className={classNames(className, 'tabs', {
        'tabs--enable-only-in-mobile': isEnableOnlyInMobile
      })}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId,
      })}
    >
      {!navigationTargetElementId && (
        <TabsNavigations
          title={title}
          items={items}
        />
      )}
      <div className="tabs__body">
        {items.map((item, index) => {

          const {
            title,
            children,
            isActive,
          } = item

          const {buttonId, contentId} = getTabsElementsIdsFromTitle(title)

          return (
            <div
              className={classNames('tabs__item', {
                'is-active': isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content =''
              key={index}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs
