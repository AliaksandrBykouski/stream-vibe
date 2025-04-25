import './Badge.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Badge = (props) => {
  const {
    className,
    isBig = false,
    mode = '', // '' - default, | accent
    children,
    iconName,
    hasFillIcon,
    iconAriaLabel,
  } = props

  return (
    <div
        className={classNames(className, 'badge', {
        [`badge--${mode}`]: mode,
        'badge--big': isBig
        })}
    >
      {iconName && (
        <Icon
          className='badge__icon'
          name={iconName}
          hasFill={hasFillIcon}
          aria-label={iconAriaLabel}
        />
      )}
      <span>{children}</span>
    </div>
  )
}

export default Badge
