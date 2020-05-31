import React from "react";
import RolePlayerDetails from "./rolePlayerDetails";
import "../index.css";

const RolePlayersRole = ({
  roleplayerdetails,
  currentRolePlayers,
  handleInput,
}) => {
  // const roleplayerdetails = this.props.roleplayerdetails;
  console.log(roleplayerdetails.role);
  return (
    <div>
      <div className="RolePlayersRole">{roleplayerdetails.role}</div>
      <div>
        <RolePlayerDetails
          roleplayerdetails={roleplayerdetails}
          currentRolePlayers={currentRolePlayers}
          handleInput={handleInput}
        />
      </div>
    </div>
  );
};

export default RolePlayersRole;

// class RolePlayersRole extends Component {
//   render() {
//     const roleplayerdetails = this.props.roleplayerdetails;
//     console.log(roleplayerdetails.role);
//     return (
//       <div>
//         <div className="RolePlayersRole">{roleplayerdetails.role}</div>
//         <div>
//           <RolePlayerDetails
//             roleplayerdetails={roleplayerdetails}
//             currentRolePlayers={this.props.currentRolePlayers}
//             handleInput={this.props.handleInput}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default RolePlayersRole;
