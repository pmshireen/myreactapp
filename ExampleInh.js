import React from "react";
import { ReactDOM } from "react-dom/client";

class UserNameForm extends React.Component {
   render() {
      return (
         <div>
            <input type="text" />
         </div>
      );
   }
}
export class CreateUserName extends UserNameForm {
   render() {
      const parent = super.render();
      return (
         <div>
            {parent}
            <button>Create</button>
         </div>
      )
   }
}

export class UpdateUserName extends UserNameForm {
    render() {
       const parent = super.render();
       return (
          <div>
             {parent}
             <button>Update</button>
          </div>
       )
    }
 }

 
 export default UserNameForm;