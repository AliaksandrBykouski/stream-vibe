import './Accordion.scss'
import classNames from "classnames";
import Icon from "@/components/Icon/index.js";


const Accordion = (props) => {
  const {
    title,
    titleLevelClassName= 'h5',
    id,
    name,
    isOpen,
    children,
    subtitle,
    isArrowButton = false,
  } = props

  return (
    <div
        className = 'accordion'
    >
      <details
        className='accordion__details'
        name={name}
        open={isOpen}
      >
        <summary className='accordion__summary'>
          <h3
            className={classNames(titleLevelClassName, 'accordion__title')}
          >
            <span role='term' aria-details={id}>{title}</span>
            {subtitle && <span className="accordion__subtitle">{subtitle}</span>}
            {isArrowButton && <div className="accordion__arrow">
              <Icon name="arrow-down" />
            </div>}
          </h3>
        </summary>
      </details>
      <div
        className="accordion__content"
        id={id}
        role='definition'
      >
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
