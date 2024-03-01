'use client';

import Modal from '@/components/modals/Modal';
import Image from 'next/image';

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  src
}) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[70vh] h-[70vh]">
        <Image 
          className="object-contain" 
          fill 
          alt="Image" 
          src={src}
        />
      </div>
    </Modal>
  )
}

export default ImageModal;