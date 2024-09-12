import { faker } from '@faker-js/faker';
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTyping from './components/UserTyping';

const randomWord = faker.word.words(10);

const App = () => {
  return (
    <>
      <CountDownTimer timer={30} />
      <div className="relative max-w-xl mt-3 leading-relaxed break-all">
        <GeneratedWords word={randomWord} />
        <UserTyping
          userInput={'test'}
          className="absolute inset-0 sm:text-2xl md:text-3xl"
        />
      </div>
      <RestartButton onRestart={() => null} className="mx-auto text-center" />

      <Results errors={10} accuracyPercentage={78} total={215} />
    </>
  );
};

const GeneratedWords = ({ word }: { word: string }) => {
  return (
    <h2 className="text-slate-500 text-xl sm:text-2xl md:text-3xl">{word}</h2>
  );
};

const CountDownTimer = ({ timer }: { timer: number }) => {
  return <h2 className="block font-bold text-yellow-500">Timer: {timer}</h2>;
};

export default App;
