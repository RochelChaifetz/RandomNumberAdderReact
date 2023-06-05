import React from 'react';


class SelectedNumbers extends React.Component {
    onLockClick = () => {
        const { onLockClick, number } = this.props;
        onLockClick(number)
    }



    render() {
        const { number, isLocked } = this.props;
        return (
            <>
                <div>
                    <li className="list-group-item">{number}
                        <button onClick={this.onLockClick} className="ms-5 btn btn-primary">
                            {isLocked ? 'Unlock' : 'Lock'}</button>
                    </li>
                </div>
            </>
        )
    }
}

export default SelectedNumbers;