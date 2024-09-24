import Button from "./components/Button";
import Input from "./components/Input";
import Posts from "./components/Posts";

const App = () => {
  return (
    <main className="p-4 flex flex-col gap-5">
      <section className="top-section">
        <div className="flex gap-4 max-[595px]:flex-col bg-red-400">
          <Input />
          <Input />
        </div>
        <Button value="Add" />
      </section>
      <section className="flex max-container">
        <Posts />
      </section>
    </main>
  );
};

export default App;
