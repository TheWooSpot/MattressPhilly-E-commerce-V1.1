import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo = ({ variant = 'dark' }: LogoProps) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-neutral-900';
  const accentColor = 'text-primary-600';

  return (
    <Link to="/" className="flex items-center">
      <div className="font-serif text-2xl font-bold">
        <span className={textColor}>Mattress</span>
        <span className={accentColor}>Philly</span>
      </div>
    </Link>
  );
};

export default Logo;
