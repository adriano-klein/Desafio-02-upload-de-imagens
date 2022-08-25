import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO: MODAL USEDISCLOSURE
  const { onOpen, isOpen, onClose } = useDisclosure();

  // TODO: SELECTED IMAGE URL STATE
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  // TODO: FUNCTION HANDLE VIEW IMAGE
  function handleNewImage(url: string):void {
    onOpen();
    setCurrentImageUrl(url);
  }

  return (
    <>
      <SimpleGrid columns={3} gap={10}>
        { cards.map(card => (
          <Card data={card} key={card.id} viewImage={handleNewImage} />
        ))
        }
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} imgUrl={currentImageUrl} onClose={onClose} />
    </>
  );
}
