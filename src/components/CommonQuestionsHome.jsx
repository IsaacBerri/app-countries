import React from "react";

const CommonQuestionsHome = () => {
  return (
    <section className="containerCommonQuestions">
      <h3>Common questions</h3>
      <div className="sectionQuestions">
        <article className="questions">
          <h4>How often is new info added?</h4>
          <p>
            We update our database weekly! You’ll find fresh country stats each
            Monday!
          </p>
        </article>
        <article className="questions">
          <h4>Do you cover every country?</h4>
          <p>
            Yes indeed! We profile all 195 countries recognized by the United
            Nations, and then some!
          </p>
        </article>
        <article className="questions">
          <h4>Why can’t I find a country?</h4>
          <p>
            We beg your pardon! Either the country you’re looking for is listed
            under another name, or our search gnomes are having a break. Please
            let us know if you continue to have trouble finding a specific
            country!
          </p>
        </article>
      </div>
    </section>
  );
};

export default CommonQuestionsHome;
