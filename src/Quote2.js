import React from "react";
export default class Quote2 extends React.Component {
    styleObj = { color: "red" };

    render() {
        let { text: a, author: b } = this.props.data;
        return (
            <>
                <div style={this.styleObj}>{a}</div>
                <div>{b}</div>
            </>
        )
    }
}
Quote2.defaultProps = { data: 
    { text: "Как прокинуть Props в компонент?",
     author: "Неизвестен" }
     }