import { clearWiseMessage} from "../../actions/actions";
import {Component} from "react";
import { connect } from "react-redux";
import {system as S} from "../../constants/system";

export class WiseMessage{
  type;
  heading;
  message;
}

export class ShowWiseMessages extends Component{
  constructor() {
    super();
    this.state = {
      WiseMessages: []
    };
  }

  getClassAndHeading(type){
    switch(type) {
    case S.WISE_MESSAGE.WARNING :
      return {
        "class":"wise-warning",
        "heading":S.WISE_MESSAGE.WARNING_HEADING
      };
    case S.WISE_MESSAGE.INFO :
      return {
        "class":"wise-info",
        "heading":S.WISE_MESSAGE.INFO_HEADING
      };
    case S.WISE_MESSAGE.SUCCESS :
      return {
        "class":"wise-success",
        "heading":S.WISE_MESSAGE.SUCCESS_HEADING
      };
    case S.WISE_MESSAGE.ERROR :
      return {
        "class":"wise-error",
        "heading":S.WISE_MESSAGE.ERROR_HEADING
      };
    default:
      return {
        "class":"",
        "heading":""
      };
    }
  }
  render(){
    return(
      <div className="wise-message-wrapper">
        {(this.props.WiseMessages.length) ?
          this.props.WiseMessages.map((wiseMessage, i) => {
            let classAndHeading = this.getClassAndHeading(wiseMessage.type);
            return (
              <div key={i} className="pgn-wrapper slideLeft" data-position="top-right">
                <div className="pgn push-on-sidebar-open pgn-circle">
                  <div className={`${classAndHeading.class} alert`}>
                    <div >
                      <div className="pgn-thumbnail">
                      </div>
                      <div className="pgn-message">
                        <div>
                          <p className="bold">
                            {(wiseMessage.heading)?wiseMessage.heading:classAndHeading.heading}
                          </p>
                          <p>{wiseMessage.message}</p>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="close" onClick={() => this.props.onClearWiseMessage(i)}>
                      <span aria-hidden="true">×</span>
                      <span className="sr-only">Close</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
          : null
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    WiseMessages: state.WiseMessages,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClearWiseMessage(index) {
      dispatch(
        clearWiseMessage(index)
      );
    }
  };
};
export const showErrors =
  connect(mapStateToProps, mapDispatchToProps)(ShowWiseMessages);

// {(message[0] === "e")? "wise-error": "wise-success"}

// export const ShowWiseMessages = ({ wiseMessages=["boom","boom-again"]})  =>
// export const ShowWiseMessages = ({ wiseMessages=[]})  =>
//working
// export const ShowWiseMessages = ({ wiseMessages=["boom","error"]})  =>
//
//   <div className="show-wiseMessages">
//     {(wiseMessages.length) ?
//     wiseMessages.map((message, i)  =>
//                 <div key={i} className="error">
//                   <p>{message}</p>
//                 </div>)
//     : null
//     }
//   </div>