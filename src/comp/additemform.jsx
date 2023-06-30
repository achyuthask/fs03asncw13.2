import React, { Component } from 'react';

class AddItemForm extends Component {
  state = {
    itemName: '',
    itemDescription: ''
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      // Update the form fields when the itemId prop changes
      const { itemName, itemDescription } = this.props;
      this.setState({
        itemName: itemName || '',
        itemDescription: itemDescription || ''
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    const { itemName, itemDescription } = this.state;
    // ...
    // Your logic for adding the new item goes here
    // ...
    // Clear the form fields
    this.setState({ itemName: '', itemDescription: '' });
  };

  render() {
    const { itemName, itemDescription } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            name="itemName"
            value={itemName}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Item Description:
          <textarea
            name="itemDescription"
            value={itemDescription}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
        <p>{itemName}</p>
        <p>{itemDescription}</p>
      </form>
    );
  }
}

export default AddItemForm;
