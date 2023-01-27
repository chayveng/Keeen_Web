import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    
    width: 700,
    overflowX: 'auto',
    display: 'block'
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function TableTest(props) {
  const { classes } = props;

  return (

    // <Grid container>
    //     <Grid item xs={12}>

    // <Paper className={classes.root}>
    //   <Table className={classes.table}>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Dessert (100g serving)</TableCell>
    //         <TableCell numeric>Calories</TableCell>
    //         <TableCell numeric>Fat (g)</TableCell>
    //         <TableCell numeric>Carbs (g)</TableCell>
    //         <TableCell numeric>Protein (g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map(row => {
    //         return (
    //           <TableRow key={row.id}>
    //             <TableCell component="th" scope="row">
    //               {row.name}
    //             </TableCell>
    //             <TableCell numeric>{row.calories}</TableCell>
    //             <TableCell numeric>{row.fat}</TableCell>
    //             <TableCell numeric>{row.carbs}</TableCell>
    //             <TableCell numeric>{row.protein}</TableCell>
    //           </TableRow>
    //         );
    //       })}
    //     </TableBody>
    //   </Table>
    // </Paper>
    //     </Grid>
    // </Grid>



<Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell numeric>Calories</TableCell>
            <TableCell numeric>Fat (g)</TableCell>
            <TableCell numeric>Carbs (g)</TableCell>
            <TableCell numeric>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TableTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableTest);
