import React from 'react';
import AllNumbers from './AllNumbers';
import SelectedNumbers from './SelectedNumbers';


class NumberAdder extends React.Component {
    state = {
        allNumbers: [],
        selectedNumbers: [],
        selectedLockedNumbers: []
    }

    generateRandomNumber = () => {
        var min = 1;
        var max = 500;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        return randomNumber;
    }

    onAddClick = () => {
        const copy = [this.generateRandomNumber(), ...this.state.allNumbers];
        this.setState({ allNumbers: copy });
        //copy.push(allNumbers);

        //const nextState = produce(this.state, drafState => {
        //    drafState.push({ allNumbers });
        //    drafState.number = {
        //        this.generateRandomNumber();
        //    }
        //});

        //this.setState(nextState);
    }

    onSelectClick = (n) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(n)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(i => i !== n) });
        }
        else {
            this.setState({ selectedNumbers: [...selectedNumbers, n] });
        }
    }

    onLockClick = (n) => {
        const { selectedLockedNumbers } = this.state;
        if (selectedLockedNumbers.includes(n)) {
            this.setState({ selectedLockedNumbers: selectedLockedNumbers.filter(i => i !== n) });
        }
        else {
            this.setState({ selectedLockedNumbers: [...selectedLockedNumbers, n] });
        }
    }

    generateSelectedList = () => {
        const { selectedNumbers, selectedLockedNumbers } = this.state;
        if (!selectedNumbers.length) {
            return
        }
        return (
            <>
            <div className="container">
                <div className="row p-5 rounded">
                    <div className="col-md-6 col-md-offset-3">
                        <h3>Selected Numbers </h3>
                            <ul className="list-group">
                                {selectedNumbers.map(n => <SelectedNumbers isLocked={selectedLockedNumbers.includes(n)} onLockClick={this.onLockClick} number={n} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
        )
    }



    render() {
        const { allNumbers, selectedNumbers, selectedLockedNumbers } = this.state;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button onClick={this.onAddClick} className="btn btn-success btn-lg w-100">Add</button>
                        </div>
                    </div>
                    <div>
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>Add/Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allNumbers.map(n => <AllNumbers isSelected={selectedNumbers.includes(n)}
                                    isLocked={selectedLockedNumbers.includes(n)}
                                    onSelectClick={this.onSelectClick} number={n} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
                {this.generateSelectedList()}
            </>
        );
    }

}


export default NumberAdder;