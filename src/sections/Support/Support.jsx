import './Support.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Field from "@/components/Field/index.js";

const Support = () => {
  const titleId = 'support-title'

  return (
    <section
      className="support container"
      aria-labelledby={titleId}
    >
      <div className="support__body">
        <div className="support__info">
          <h1 className="support__title h2" id={titleId}>
            Welcome to our support page!
          </h1>
          <div className="support__description">
            <p> We're here to help you with any problems you may be having with our product.</p>
          </div>
        </div>
        <Image
          src='/src/assets/images/support/1.png'
          className="support__image" />
      </div>
      <form className="support__form" action="">
        <Field
          className="support__form-cell"
          label="First Name"
          placeholder="John"
          isRequired
        />
        <Field
          className="support__form-cell"
          label="Last Name"
          placeholder="Wick"
        />
        <Field
          className="support__form-cell"
          label="Email"
          type="email"
          placeholder="johnwick@example.com"
          isRequired
        />
        <Field
          className="support__form-cell"
          label="Phone Number"
          placeholder="+420 123 456 789"
          inputMode="tel"
          mask="+420 000-000-000"
        />
        <Field
          className="support__form-cell support__form-cell--wide"
          label="Message"
          type="textarea"
          placeholder="Enter your message here..."
          isRequired
        />
      </form>
    </section>
  )
}

export default Support
