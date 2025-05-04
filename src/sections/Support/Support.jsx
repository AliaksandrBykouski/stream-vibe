import './Support.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Field from "@/components/Field/index.js";
import Checkbox from "@/components/Checkbox/index.js";
import Button from "@/components/Button/index.js";
import Select from "@/components/Select/index.js";

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
          placeholder=" 123 456 789"
          inputMode="tel"
          mask="000-000-000"
          renderBefore={(fieldControlClassName) => (
            <Select
              label="Country Code"
              buttonClassName={fieldControlClassName}
              options={[
                { value: '+420', isSelected: true },
                { value: '+421', isSelected: false },
                { value: '+422', isSelected: false },
              ]}
            />
          )}
        />
        <Field
          className="support__form-cell support__form-cell--wide"
          label="Message"
          type="textarea"
          placeholder="Enter your message here..."
          isRequired
        />
        <div className="support__form-cell support__form-cell--wide support__form-cell--actions">
          <Checkbox
            className="support__form-agreement"
            label="I agree with Terms of Use and Privacy Policy"
            isRequired
          />
          <Button
            className="support__form-submit-button"
            label="Send Message"
            type="submit"
          />
        </div>
      </form>
    </section>
  )
}

export default Support
