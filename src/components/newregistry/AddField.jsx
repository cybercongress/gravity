
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
        const unique = this.unique.checked;
        this.props.onAdd(name, type, unique);
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
            <tr>
                <td style={{width: 100}}>
                    <WideInput placeholder='Field name' value={name} onChange={this.changeName}/>
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
                <td style={{textAlign: 'center'}}>
                    <input ref={node => this.unique = node} type='checkbox' style={{width: 12}}/> unique
                </td>
                <td style={{textAlign: 'end'}}>
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
