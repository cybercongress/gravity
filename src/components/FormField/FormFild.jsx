import React, { Component } from 'react';

import {
    FormFieldContainer,
    FormLabel,
    FormValue,
    ButtonContainer,
} from '../../components/FormField/FormFieldComponent';


import {
    EditButton,
    UpdateButton,
    CancelButton,
} from '../../components/DatabaseItem';

class FormField extends React.Component {
    state = {
        edit: false,
    }

    startEdit = () => {
        this.setState({ edit: true });
    }

    save = () => {
        const { onUpdate, children } = this.props;

        this.setState({ edit: false });

        if (children) {
            onUpdate();
        } else {
            onUpdate(this.inputRef.value);
        }
    }

    cancel = () => {
        this.setState({ edit: false });
    }

    render() {
        const {
            label, value,icon, valueType, onUpdate, children,
        } = this.props;
        const { edit } = this.state;

        return (
            <FormFieldContainer>
                <FormLabel>
                    {`${label}:`}
                </FormLabel>
                <FormValue>
                    {!edit ? (
                        <span style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                            <span style={{display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {value}
                            </span>
                            <span>
                                {icon}
                            </span>
                            {/* <span style={ { marginLeft: 5 } }>{valueType}</span> */}
                        </span>
                    ) : (
                        <span style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                        {children ? (
                            <span style={{width:'100%'}}>
                                {children}
                            </span>
                        ) : (
                            <input ref={node => this.inputRef = node} defaultValue={ value } />
                        )}
                        </span>
                    )}
                </FormValue>
                {onUpdate && (
                    <ButtonContainer>
                        {!edit ? (
                            <div>
                                <EditButton onClick={ this.startEdit } />
                            </div>
                        ) : (
                            <div>
                                <UpdateButton onClick={ this.save } />
                                <CancelButton onClick={ this.cancel } />
                            </div>
                        )}
                    </ButtonContainer>
                )}
            </FormFieldContainer>
        );
    }
}

export default FormField;
