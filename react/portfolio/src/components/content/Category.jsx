import React from 'react';

export default function Category({name, count, selected, click}) {


    return (
        <button class={`category ${name === selected ? "category--selected": ""}`}
        onClick={() => click(name)}>{name}<span class="category__count">{count}</span></button>
    );
}

