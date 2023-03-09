import type { MetaFunction } from "@remix-run/server-runtime";

export const meta: MetaFunction = () => {
  return { title: "Literature" };
};

export default function LiteraturePage() {
  return (
    <div className="space-y-3 text-gray-700 lg:w-1/2">
      <h1 className="text-center text-xl font-medium">Background Literature</h1>
      <h2 className="text-lg">Triarchic Theory of Intelligence</h2>
      <p>
        Robert J. Sternberg proposed a theory that intelligence consists of
        three parts – analytical, creative, and practical, also known as the
        “triarchic theory” [1]. Analytical intelligence is characterised by the
        ability to analyse, solve problems, think critically, understand complex
        problems [1]. This ability is considered to be important for academic
        success [1]. Creative intelligence is characterised by the ability to
        generate new and original ideas and think outside the box [1]. While
        this type of intelligence is often associated with artistic and musical
        ability, it is also considered to be important in fields such as
        science, technology, etc. Practical intelligence is characterised by the
        ability to adapt to new situations and solve problems in a practical
        setting. Common sense, resource effectiveness and shaping of
        environments or selection of new ones are all involved in this type of
        intelligence [1]. For the project, we will be following Sternberg’s
        theory of intelligence for a few different reasons: the theory is
        comprehensive, practical, applicable in real-world settings, can produce
        useful results for analysing individual differences in intelligence.
      </p>
      <h2 className="text-lg">
        The Sternberg Triarchic Abilities Test {"("}STAT{")"}
      </h2>
      <p>
        The Sternberg Triarchic Abilities Test (STAT) is a cognitive IQ test
        developed by Robert J. Sternberg and measures three types of
        intelligence: analytical, creative, and practical. It consists of a
        series of problems that must be solved using mental manipulation and is
        designed to assess individual’s abilities in the three areas mentioned.
        As the development of this IQ test is based on Sternberg's triarchic
        theory of intelligence, it is appropriate to utilize the Sternberg
        Triarchic Abilities Test (STAT) as a framework. The STAT is a
        well-established measure of analytical, creative, and practical
        intelligence, which are the three distinct abilities posited by
        Sternberg's theory. The project will be following the structure and
        contents of the STAT, except for practical intelligence. The decision to
        exclude practical intelligence from the test was made to ensure that the
        scoring system is based solely on the accuracy of question responses.
        Given the practical nature of the omitted questions, it is impossible to
        determine with absolute certainty if the answer is right or wrong
        because it is influenced by the participant’s own practical knowledge
        and experience. Hence, categorising responses as correct or incorrect
        would add bias into the scoring process.
      </p>
      <h2 className="text-lg">References:</h2>
      <p>
        [1] R. Sternberg, Beyond IQ: A Triarchic Theory of Human Intelligence,
        Cambridge University Press, 1985.
      </p>
    </div>
  );
}
