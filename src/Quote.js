export default function Quote(props){
    let styleObj = {textAlign: "right", fontStyle: "italic"}
    return(
        <>
        <div>{props.text}</div>
        <div style={styleObj}>{props.author}</div>
        </>
    )
}
Quote.defaultProps = {text: "Разработка ПО - что может быть интересней и прибыльней?!", author: "Сергей Рубан"}
// Quote.defaultProps.text = "Как прокинуть Props в компонент?";
// Quote.defaultProps.author = "Неизвестен";