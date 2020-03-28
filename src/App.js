import React from 'react';
import InputSection from "./components/InputSection";
import ListSection from "./components/ListSection";
import {v4 as uuid} from 'uuid';
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
            itemInput: '',
            id: uuid(),
            tryEdit: false,
            isCompleted: false
        }
    }

    handleChange = (e) => {
        this.setState({
            itemInput: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.itemInput !== "") {
            const newTodo = {
                id: this.state.id,
                itemTitle: this.state.itemInput,
                tryEdit: this.state.tryEdit
            };

            const newArr = [newTodo, ...this.state.items];
            this.setState({
                items: newArr,
                itemInput: '',
                id: uuid(),
                tryEdit: false,
                isCompleted: false
            });
        }
    };

    handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure to delete this todo?',
            icon: 'warning',
        }).then((result) => {
            if (result.value) {
                const filteredList = this.state.items.filter(item => {
                    return id !== item.id;
                });
                this.setState({
                    items: filteredList
                })
            }
        })
    };

    handleEdit = (id) => {
        const item = this.state.items.find(item => item.id === id)

        if (!item.isCompleted) {
            if (this.state.itemInput === "") {
                const filteredList = this.state.items.filter(item => {
                    return id !== item.id;
                });
                const selectedItem = this.state.items.find(item => {
                    return item.id === id;
                });
                this.setState({
                    items: filteredList,
                    itemInput: selectedItem.itemTitle,
                    tryEdit: true
                })
            }
        }
    };

    toggleComplete = (id) => {
        const toggledItem = this.state.items.find(item => item.id === id);
        toggledItem.isCompleted = true;

        const newArrWithoutToggledItem = this.state.items.filter(item => item.id !== id);

        this.setState({
            items: [...newArrWithoutToggledItem, toggledItem]
        });
    };

    handleClearList = () => {
        if (this.state.items.length > 0) {
            Swal.fire({
                title: 'Are you sure to delete all?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete all!'
            }).then((result) => {
                if (result.value) {
                    this.setState({
                        items: []
                    });
                    Swal.fire(
                        'Deleted!',
                        'Whole list has been deleted.',
                        'success'
                    )
                }
            })
        }
    };

    render() {
        const backgroundCol = {
            backgroundColor: 'DodgerBlue'
        }
        const hrCol = {
            backgroundColor: '#999'
        }

        return (
            <div className="App mt-2 mb-3">
                <Container maxWidth="sm">
                    <div style={backgroundCol} className="jumbotron p-1 mb-0">
                        <h2 className="d-flex justify-content-center">ToDo App</h2>
                    </div>
                    <InputSection
                        itemInput={this.state.itemInput}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        tryEdit={this.state.tryEdit}
                    />
                    <hr style={hrCol}/>
                    <ListSection items={this.state.items}
                                 handleDelete={this.handleDelete}
                                 handleClearList={this.handleClearList}
                                 handleEdit={this.handleEdit}
                                 toggleComplete={this.toggleComplete}
                    />
                </Container>
            </div>
        );
    }
}

export default App;
