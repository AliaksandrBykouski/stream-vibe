import Section from "@/layouts/Section";
import Button from "@/components/Button";
import AccordionGroup from "@/components/AccordionGroup";
import Accordion from "@/components/Accordion/index.js";

const Questions = () => {

  const questionItems = [
    {
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
    },
    {
      question: 'How much does StreamVibe cost?',
      answer: 'StreamVibe offers several plans starting from $9.99 per month.',
    },
    {
      question: 'What content is available on StreamVibe?',
      answer: 'StreamVibe includes a wide range of movies, TV shows, and exclusive originals.',
    },
    {
      question: 'How can I watch StreamVibe?',
      answer: 'You can watch on your phone, tablet, smart TV, or computer using the StreamVibe app or website.',
    },
    {
      question: 'How do I sign up for StreamVibe?',
      answer: 'Simply visit our website and follow the sign-up process to create your account.',
    },
    {
      question: 'What is the StreamVibe free trial?',
      answer: 'StreamVibe offers a 7-day free trial for new users to explore our service.',
    },
    {
      question: 'How do I contact StreamVibe customer support?',
      answer: 'You can contact support through our Help Center or by emailing support@streamvibe.com.',
    },
    {
      question: 'What are the StreamVibe payment methods?',
      answer: 'We accept credit/debit cards, PayPal, and other popular payment methods.',
    },
  ];

  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={(
        <Button
          label="Ask a Question"
          href="/support"
        />
      )}
    >
      <AccordionGroup columns={2}>
        {questionItems.map((item, index) => (
          <Accordion
            title={item.question}
            id={`question-${index}`}
            name='questions'
            isOpen={index === 0}
            key={index}
            >
            <p>{item.answer}</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

export default Questions
