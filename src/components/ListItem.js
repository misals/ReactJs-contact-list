import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      editedName: "",
      editedPhone: "",
    };
  }

  handleEdit = () => {
    this.setState({
      editMode: true,
    });
  };

  handleNameChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      editedName: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      editedPhone: e.target.value,
    });
  };

  handleUpdateContact = async () => {
    const { editedName, editedPhone } = this.state;
    const { handleUpdate, id } = this.props;
    if (editedName && editedPhone) {
      await handleUpdate(editedName, editedPhone, id);
      this.setState({
        editMode: false,
      });
    }
  };

  render() {
    const { name, contact, handleDelete, id } = this.props;
    const { editMode } = this.state;
    return (
      <li>
        <p className="name-container">
          {editMode ? (
            <input
              class="login-form-input"
              placeholder="Name..."
              onChange={this.handleNameChange}
              required
            />
          ) : (
            name
          )}
        </p>
        <p className="phone-container">
          {editMode ? (
            <input
              class="login-form-input"
              placeholder="Phone..."
              onChange={this.handlePhoneChange}
              required
            />
          ) : (
            contact
          )}
        </p>
        <p className="btns-container">
          {editMode ? (
            <button
              className="list-btn-submit"
              onClick={this.handleUpdateContact}
            >
              Submit
            </button>
          ) : (
            // <button onClick={this.handleSubmit}>Add Contact</button>
            <button className="list-btn-edit" onClick={this.handleEdit}>
              {" "}
              Edit
            </button>
          )}
          <button className="list-btn-delete" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </p>
      </li>
    );
  }
}

export default ListItem;
