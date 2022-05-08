import CardItem from "./CardItem";

function CardsList(){
    let data = [
        {
            id: 1,
            srcImage: "https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg",
            title: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below",
            desction: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                       when an unknown printer`,
            category: "science & enviroment"
        },
        {
            id: 2,
            srcImage: "https://i.natgeofe.com/k/2ff64095-8426-45f0-b2c9-11f55bdbc97a/trex.jpg?w=636&h=358",
            title: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots",
            desction: `There are many variations of passages of Lorem Ipsum available, but the majority 
            have suffered alteration in some form, by injected humour, or randomised words which don't 
            look even slightly believable.`,
            category: "science & enviroment"
        },
        {
            id: 3,
            title: "Letraset sheets containing Lorem Ipsum passages, and more",
            srcImage: "https://ichef.bbci.co.uk/news/976/cpsprodpb/BE5A/production/_123303784_gettyimages-524191066.jpg",
            desction: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                       Lorem Ipsum has been`,
            category: "science & enviroment"
        },
    ]

    return(
        <div className="container">
            {data.map(card => <CardItem key={card.id} {...card}/>)}
        </div>
    );
}

export default CardsList