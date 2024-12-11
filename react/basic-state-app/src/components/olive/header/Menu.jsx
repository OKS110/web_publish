export default function Menu({name, count}) {
return (
    <div>
        <button type="button">{name}
                    {name === "장바구니" ? <span>  ({count})</span>:''}
        </button>
    </div>
    );
};