import './BoxOffice.css';

export default function BoxOffice({rank, title, openDt, cnt, total, amt, type}){
    if(type === "content"){
        
        // cnt = new Intl.NumberFormat('en-US').format(cnt); //3자리씩 ,로 구분해주는 생성자
        // total = new Intl.NumberFormat('en-US').format(total);
        // amt = new Intl.NumberFormat('en-US').format(amt);
        cnt = Number(cnt).toLocaleString().concat('명');
        total = Number(total).toLocaleString().concat('명');
        amt = Number(amt).toLocaleString().concat('원');
    }
    return(
         <div id='title'>
           <p>{rank}</p>
            <p>{title}</p>
            <p>{openDt}</p>
            <p>{cnt}</p>
            <p>{total}</p>
            <p>{amt}</p>
         </div>                 
    );

}