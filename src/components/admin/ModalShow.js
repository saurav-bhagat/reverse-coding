import React from 'react';
import './Adminstyle.css';

class ModalShow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="md-wrapper">
                    <div className="md-head">
                        <h3>Instruction</h3>
                    </div>
                    <div className="md-content">
                        <p>
                          Please Don't hurry ! You can upload multiple files too ! Make sure you upload the correct code.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalShow;