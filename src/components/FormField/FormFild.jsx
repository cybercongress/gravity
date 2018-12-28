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
                        <span>
                            {value}
                            {icon}

                            <span style={ { marginLeft: 5 } }>{valueType}</span>
                        </span>
                    ) : (
                        <span>
                        {children ? (
                            <span>
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
