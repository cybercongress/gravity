
import React, { Component } from 'react';

import {
    AddButton, WideInput, WideSelect
} from '../..';

class AddField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    add = () => {
        const {
            name
        } = this.state;
        const type = this.type.value;
        this.props.onAdd(name, type);
        this.setState({
            name: ''
        })
    }
    changeName = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        const {
            fields
        } = this.props;
        const {
            name
        } = this.state;
        const exist = !!fields.find(x => x.name === name);
        const canAdd = name.length > 0 && !exist;

        return (
            <tr >
                <td>
                    <WideInput value={name} onChange={this.changeName}/>
                </td>
                <td>
                    <WideSelect inputRef={node => { this.type = node; }}>
                        <option value='string'>string</option>
                        <option value='address'>address</option>
                        <option value='bool'>bool</option>
                        <option value='uint256'>uint256</option>
                        <option value='int256'>int256</option>
                    </WideSelect>
                </td>
                <td>
                    <AddButton
                        onClick={this.add}
                        disabled={!canAdd}
                    />
                </td>
            </tr>
        );
    }
}

export { AddField };
