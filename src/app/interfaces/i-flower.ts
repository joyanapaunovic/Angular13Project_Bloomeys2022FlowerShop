export interface IFlower {
    id: number;
    flowerName: string;
    price: {
        currentPrice: number;
        oldPrice: number | null;
    };
    image: {
        src: string;
        alt: string;
    };
    description: string;
    typeId: number;
    availability: boolean;
}
