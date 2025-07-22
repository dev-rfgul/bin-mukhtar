import React from 'react'

import ScrollStack from '../../src/components/lightswind/scroll-stack';
const ScrollServices = () => {

    const cards = [
        {
            title: 'Card 1',
            subtitle: 'First card description',
            backgroundImage: 'https://via.placeholder.com/800x600',
            badge: 'New',
            content: <p>This is some custom content inside card 1.</p>,
        },
        {
            title: 'Card 2',
            subtitle: 'Second card description',
            backgroundImage: 'https://via.placeholder.com/800x600',
            badge: 'Featured',
            content: <p>More content in card 2.</p>,
        },
        {
            title: 'Card 3',
            subtitle: 'Second card description',
            backgroundImage: 'https://via.placeholder.com/800x600',
            badge: 'Featured',
            content: <p>More content in card 2.</p>,
        },
        {
            title: 'Card 4',
            subtitle: 'Second card description',
            backgroundImage: 'https://via.placeholder.com/800x600',
            badge: 'Featured',
            content: <p>More content in card 2.</p>,
        },
        {
            title: 'Card 5',
            subtitle: 'Second card description',
            backgroundImage: 'https://via.placeholder.com/800x600',
            badge: 'Featured',
            content: <p>More content in card 2.</p>,
        },
        // Add up to 5 cards total
    ];
    return (
        <div>
            <ScrollStack
                cards={cards}
                backgroundColor="#f0f4f8"
                cardHeight="70vh"
                cardMaxHeight="500px"
                cardBorderRadius="24px"
                animationDuration="0.6s"
                sectionHeightMultiplier={3}
                intersectionThreshold={0.15}
                className="my-custom-stack"
            />
        </div>
    )
}

export default ScrollServices

