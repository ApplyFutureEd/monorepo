import { FC } from 'react';

type Props = {
    categorie: string;
};

const Categories: FC = (categorie) => {
    return (
        <div>
            <p>{categorie}</p>
        </div>
    );
};

export default Categories;
