import CardPaletteColor from '../CardPaletteColor/CardPaletteColor.jsx';
import './CardPaletteColorsList.css';

const CardPaletteColorsList = ({ colors }) => (
    <div className="colors-stack">
        {colors.map((hex, index) => (
            <CardPaletteColor key={`${hex}-${index}`} color={hex} />
        ))}
    </div>
);

export default CardPaletteColorsList;