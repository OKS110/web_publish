export default function Radio({click}) {
    const put = (event) => {
        click(event.target.value);
    }

return (
    <div>
         <div>
            <input type="radio" name="select" value="total" onClick={put}/>전체도서
            <input type="radio" name="select" value="domestic" onClick={put}/>국내도서
            <input type="radio" name="select" value="overseas" onClick={put}/>국외도서
        </div>
    </div>
    );
};