
export default function MovieChartTitle({text1, text2, text3}){
    return(
            <article class="content-moviechart-title">
                <div class="content-moviechart-title-left">
                    <a href="#">{text1}</a>
                    <span>|</span>
                    <a href="#">{text2}</a>
                </div>
                <div class="content-moviechart-title-right">
                    <a href="#">{text3} &gt;</a>
                </div>
            </article>
    );
}