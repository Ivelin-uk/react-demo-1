function CardItem({title,srcImage,desction,category}){
    return(
        <div class="item">
            <img src={srcImage} alt="image"/>
            <div>
                <h3>{title}</h3> 
                <p>{desction}</p> 
            </div>
            <p class="info">{category}</p>
        </div>   
    );
}

export default CardItem;