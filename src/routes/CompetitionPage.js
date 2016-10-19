import React, {PropTypes} from "react"
import CompetitionStyle from './CompetitionPage.less'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

function CompetitionPage() {

  return(
    <div className="row">
      <div className="col-md-3">
        <Paper>
          <Menu width={200}>
            <MenuItem primaryText="Preview"  />
            <MenuItem primaryText="Share"  />
            <MenuItem primaryText="Get links" />
            <MenuItem primaryText="Make a copy"  />
            <MenuItem primaryText="Download"  />
            <MenuItem primaryText="Remove"  />
          </Menu>
        </Paper>
      </div>


      <div className="col-md-9">
        <Paper>
          aaaaa
        </Paper>
      </div>

    </div>
  )
}

export default CompetitionPage;
