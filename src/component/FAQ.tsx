import plus from "../assets/images/plus.svg"
import minus from "../assets/images/minus.svg"
import Line70 from "../assets/images/Line 70.svg"
import "../FAQ.css"

const FAQ = () => {
  return (
  <section className="questions" id="FAQs">
    <div className="faq-container">
      <div className="question-title-container">
        <h1 className="question-title"><img src={Line70} alt=""/> FAQs</h1>
      </div>
      <div className="section-center question-center">
        <article className="question q-1">
          <div className="question-header ">
            <h2 className="question-header-title  ">How does URL shortening work?</h2>
            <img src={minus} alt=""/>
          </div>
          <p className="question-body">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </article>
        <article className="question active">
          <div className="question-header">
            <h2 className="question-header-title">
              Is it necessary to create an account to use the URL shortening
              service?
            </h2>
            <img src={plus} alt="plus icon" />
          </div>
        </article>
        <article className="question">
          <div className="question-header">
            <h2 className="question-header-title">
              Are the shortened links permanent? Will they expire?
            </h2>
            <img src={plus} alt=""/>
          </div>
        </article>
        <article className="question">
          <div className="question-header">
            <h2 className="question-header-title">
              Are there any limitations on the number of URLs I can shorten?
            </h2>
            <img src={plus} alt=""/>
          </div>
        </article>
        <article className="question">
          <div className="question-header">
            <h2 className="question-header-title">
              Can I customize the shortened URLs to reflect my brand or content?
            </h2>
            <img src={plus} alt=""/>
          </div>
        </article>
        <article className="question">
          <div className="question-header">
            <h2 className="question-header-title">
              Can I track the performance of my shortened URLs?
            </h2>
            <img src={plus} alt=""/>
          </div>
        </article>
        <article className="question">
          <div className="question-header">
            <h2 className="question-header-title">
              How secure is the URL shortening service? Are the shortened links
              protected against spam or malicious activity?
            </h2>
            <img src={plus} alt=""/>
          </div>
        </article>
        <article className="question">
          <div className="question-header">
            <h2 className="question-header-title">
              What is a QR code and what can it do?
            </h2>
            <img src={plus} alt=""/>
          </div>
        </article>
        <article className="question">
          <div className="question-header">
            <h2 className="question-header-title">
              Is there an API available for integrating the URL shortening
              service into my own applications or websites?
            </h2>
            <img src={plus} alt=""/>
          </div>
        </article>
      </div>
      </div>
    </section>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;