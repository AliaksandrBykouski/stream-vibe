import './Button.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon/Icon.jsx";

const Button = (props) => {
    const {
        className,
        href,
        type = 'button',
        target,
        mode = '', // '' - по умолчанию, 'black-10' - черный 'transparent' - прозрачный, black-08, black-06
        label,
        isLabelHidden = false,
        iconName,
        iconPosition = 'before', // может быть 'before' или 'after'
        hasFillIcon,
        extraAttrs,
    } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps =  { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ?  label : undefined
  const iconComponent = iconName && <Icon
      name={iconName}
      className="button__icon"
      hasFill={hasFillIcon}
  />
    return (
        <Component
            className={classNames(className,'button', {
                [`button--${mode}`]: mode
            })}
            title={title}
            aria-label={title}
            {...specificProps}
            {...extraAttrs}
        >
          {iconPosition === 'before' && iconComponent}
          {!isLabelHidden && (
              <span className="button__label">{label}</span>
          )}
          {iconPosition === 'after' && iconComponent}
        </Component>
    )
}

export default Button
