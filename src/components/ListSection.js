import React from 'react';
import TodoItem from "./TodoItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

class ListSection extends React.Component {
    render() {
        const {items, handleClearList, handleDelete, handleEdit, toggleComplete} = this.props;
        const backgroundCol = {
            backgroundColor: 'WhiteSmoke'
        }
        return (
            <div>
                <Card style={backgroundCol}>
                    <CardContent>
                        {
                            items.map((item) => {
                                return (<TodoItem
                                    key={item.id}
                                    handleDelete={() => handleDelete(item.id)}
                                    handleEdit={() => handleEdit(item.id)}
                                    toggleComplete={() => toggleComplete(item.id)}
                                    title={item.itemTitle}
                                    isCompleted={item.isCompleted}
                                />);
                            })
                        }
                    </CardContent>
                    <CardActions>
                        <button onClick={handleClearList} className="btn btn-danger btn-sm btn-block">Clear the list
                        </button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default ListSection;