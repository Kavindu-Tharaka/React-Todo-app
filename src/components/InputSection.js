import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';

class InputSection extends React.Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        const {handleChange, handleSubmit, itemInput, tryEdit} = this.props;
        const backgroundCol = {
            backgroundColor: 'WhiteSmoke'
        }
        return (
            <div className="mt-1 mb-1">
                <form onSubmit={handleSubmit}>
                    <Card style={backgroundCol}>
                        <CardContent className="d-flex justify-content-center">
                            <div>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LibraryBooksRoundedIcon/>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            ref={this.inputRef}
                                            value={itemInput} label="Add New Todo Here"
                                            onChange={handleChange}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </CardContent>
                        <CardActions>
                            <button
                                className={tryEdit ? "btn btn-success btn-sm btn-block" : "btn btn-primary btn-sm btn-block"}>
                                {tryEdit ? "Edit todo" : "Add to the list"}
                            </button>
                        </CardActions>
                    </Card>
                </form>
            </div>
        );
    }
}

export default InputSection;