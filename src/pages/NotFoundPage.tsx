import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Mattress Philly';
  }, []);
  
  return (
    <div className="container-custom py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-serif font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
      <p className="text-neutral-600 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/" variant="primary">
          Return Home
        </Button>
        <Button href="/products" variant="outline">
          Browse Mattresses
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
