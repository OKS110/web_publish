export default function Select({category, handleChangeCategory}) {


    const categoryFnc = (event) => {
        handleChangeCategory(event.target.value);
    };
return (
        <div>
            <select onChange={categoryFnc}>
                <option value="선택">선택</option>
                {category && category.map((item) => 
                    <option value={item.name}>{item.name}</option>
                )}
            </select>
        </div>
    );
};