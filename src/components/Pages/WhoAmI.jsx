const WhoAmI = () => {
  return (
    <div>
      <h3 className={"flex items-center justify-center md:justify-start leading-normal font-mono text-2xl lg:text-4xl mb-4"}>
        <span className={"font-semibold leading-tight"}>
          <span className={"font-mono"}>🧠 Who Am I?</span>
        </span>
      </h3>
      <div>
        <pre className="bg-gray-800 text-white p-2 md:p-4 rounded-lg overflow-x-auto">
          <code className="text-yellow-400">
            {`interface WhoAmIInterface {
  name: string;
  email?: string;
  title: string;
  alias: string;
  currentProject: string;
  currentlyLearning: string[];
  funFact: string;
}

const whoAmI: WhoAmIInterface = {
  name: "Emmanuel Somuah",
  title: "Fullstack Developer",
  alias: "TheDuo34",
  currentProject: "Xolace - A Social media platform",
  currentlyLearning: ["Spring Boot", "Cloud Services"],
  funFact: "I spend more time researching new stacks than sleeping.",
};`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default WhoAmI;
