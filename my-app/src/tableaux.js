function Tableaux(props) {
    return (
    <nav>
    <div class="pages">
        <a> </a>
        <a>{props.date}</a>                
        <a>{props.name}</a>
        <a> </a>
        <a>{props.price}</a>
        <a> </a>
    </div>
</nav>
    )
}

export default Tableaux;