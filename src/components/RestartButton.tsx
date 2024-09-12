import { useRef } from 'react';
import { MdRefresh } from 'react-icons/md';

const RestartButton = ({
  onRestart: handleRestart,
  className = '',
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };
  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`mt-8 text-slate-500 items-center ${className}`}
    >
      <MdRefresh className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;
