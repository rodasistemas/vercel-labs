import { Component } from "react";

export interface Props {
    children?: React.ReactNode;
    className?: string;

}

export interface State {
}

export default class Sidebar extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <aside className={this.props.className}>{ this.props.children }</aside>
        )
    }
}
