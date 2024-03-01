// Import necessary libraries and components
import Image from 'next/image';

// Define the AvatarProps interface
interface AvatarProps {
  image: string;
  size?: 'small' | 'medium' | 'large';
  isActive?: boolean;
}

// Define the Avatar component
const AvatarCard: React.FC<AvatarProps> = ({ image, size = 'medium', isActive }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'h-9 w-9 md:h-11 md:w-11';
      case 'medium':
        return 'h-12 w-12 md:h-16 md:w-16';
      case 'large':
        return 'h-32 w-32 md:h-40 md:w-40';
      default:
        return 'h-12 w-12 md:h-16 md:w-16';
    }
  };

  return (
    <div className="relative">
      <div
        className={`
          relative 
          inline-block 
          rounded-full 
          overflow-hidden
          ${getSizeClass()}  
        `}
      >
        <Image fill src={image || '/images/placeholder.jpg'} alt="Avatar" />
      </div>

      {isActive && (
        <span
          className={`
            absolute 
            block 
            rounded-full 
            bg-green-500 
            ring-2 
            ring-white 
            top-0 
            right-0
            h-2 
            w-2 
            md:h-3 
            md:w-3
          `}
        />
      )}
    </div>
  );
};

export default AvatarCard;
