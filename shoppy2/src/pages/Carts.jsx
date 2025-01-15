export default function Carts({cartItems}) {

    if (!Array.isArray(cartItems)) {
        return <div>장바구니에 항목이 없습니다.</div>;
    }
    
    return (
        <div>
            <table border={1}>
                <tr>
                    <th>PID</th>
                    <th>Size</th>
                    <th>QTY</th>
                    <th>Price</th>
                </tr>
                
                {
                cartItems.map((item) => 
                    <tr>
                        <td>{item.pid}</td>
                        <td>{item.size}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                    </tr>
                )}
            </table>
        </div>
        );
    };