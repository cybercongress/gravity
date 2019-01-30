import React, { Component } from 'react';
// import cx from 'classnames';
// // import { connect } from 'react-redux';
// // import { navigate } from '../redux/browser';
// const styles = require('./CybLink.css');

class CybLink extends Component {
    onLinkClick = (e) => {
        e.preventDefault();

        if (this.props.onNavigate) {
            this.props.onNavigate(this.props.dura);
        }
    };

    render() {
        const {
            children, dura, ...props
        } = this.props;

        return (
            <a
                href={ `cyb://${ dura }` }
                { ...props }
                onClick={ this.onLinkClick }
            >
                { this.props.children }
            </a>
        );
    }
}

export default CybLink;


// export class CybLink extends Component {
// 	onLinkClick = (e) => {
// 	    e.preventDefault();

//   		this.props.navigate(this.props.dura);

// 	    if (this.props.onClick) { this.props.onClick(e); }
//   	}

// 	render() {
// 	    const {
// 	        children, dura, defaultAccount, navigate, ...props
// 	    } = this.props;

// 	    return (
// 			<a className={cx(styles.link,{[styles.id_bar__txq]: defaultAccount })}
// 				href={ `cyb://${dura}` }
// 				{ ...props }
// 				onClick={ this.onLinkClick }
// 			>
// 					{this.props.children}
// 			</a>
// 	    );
// 	}
// }

// export default connect(
//     null,
//     { navigate },
// )(CybLink);
