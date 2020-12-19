import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class InputExpense extends Component {
    constructor(props) {
        super(props);
        console.log("in Constructor")
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state = {
            username: 'dan', 
            //userID: '',
             item:'',
             amount: 0,
             date: new Date()
         }       
    }
    /*
     onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    */
    onChange(e) {
       console.log("in onChange")
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
       console.log("in onSubmit")
        const expense = {
            //username: this.state.username,
            item: this.state.item,
            amount: this.state.amount,
            date: this.state.date,
            //userID: localStorage.getItem("username")
        }

        console.log(expense)
        axios.post('http://localhost:5000/expenses/add', expense)
            .then(res => {console.log(res.data)

            });

       // window.location = '/members';
    }

    render() {
    return (
         
        <div>
            <h3>Create New Expense</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Item: </label>
                    <input type="text"
                        name="item"
                        required
                        className="form-control"
                        placeholder= "Enter an Item"
                        onChange={this.onChange}
                        value={this.state.item}
                        
                    />
                </div>
                <div className="form-group">
                    <label>Amount: </label>
                    <input type="text"
                    name="amount"
                     required
                     className="form-control"
                     onChange={this.onChange}
                     value={this.state.amount}
                    
                     />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Budget Expense" className= "btn btn-secondary" />
                </div>
            </form>
        </div>
        
    
        
    );
    }
}

export default InputExpense;