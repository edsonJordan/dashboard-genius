import React from 'react';
import Card from '../atoms/Card';

// Definiendo una interfaz para los datos que vamos a mostrar
interface CardData {
  id: number;
  title: string;
  description: string;
}

interface CardListProps {
  cards: CardData[]; // Array de objetos CardData
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map(card => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;