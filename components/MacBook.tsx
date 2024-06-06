import { MacbookScroll } from "./ui/MacBookScroll";

const Macbook = () => {
  return (
    <div className="overflow-hidden w-full">
      <MacbookScroll
        title={
          <span>
            My Portfolio <span className="text-purple">Recent Projects.</span>
          </span>
        }
        src={`/github.png`}
        showGradient={false}
      />
    </div>
  );
};

export default Macbook;
