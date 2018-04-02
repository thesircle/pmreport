import {Component} from "react";
import {connect}    from "react-redux";

/*
  ResourceUtilization: {
    id,
    name,
    data: [
      {
        date,
        ticket: {
          id,
          ticketName,
          projectName
        }
      },
      {
        date,
        ticket: {
          id,
          ticketName,
          projectName
        }
      },
      {
        date,
        ticket: {
          id,
          ticketName,
          projectName
        }
      }
    ]

  }


 */
export class Resource {
  id;
  firstName;
  lastName;
}

export class Ticket {
  ticketName;
  ticketId;
  ticketDonePercentage;
  ticketTitle;
  ticketId;
  ticketStartDate;
  ticketEndDate;
  ticketEstimatedHours;
}

export class Project {
  projectId;
  projectName;
}

export class ResourceUtilization {
  //Resource: {
  //  {id, fname, lname},
  //  Tickets: [{projectName, ticketName, ticketTitle, etc},{projectName, ticketName, ticketTitle, etc}],
  // }
}

export let thejson = [
  {
    "id": 1,
    "firstName": "test first name",
    "lastName": "test last name",
    "data": [
      {
        "date": "2018-04-02",
        "totalHours": 8,
          "tickets" : [
          {
            "id": 1,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 5
          },
          {
            "id": 2,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 2
          },
          {
            "id": 3,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 1
          }
        ]
      },
      {
        "date": "2018-04-03",
        "totalHours": 10,
          "tickets" : [
          {
            "id": 1,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 3
          },
          {
            "id": 2,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 2
          },
          {
            "id": 3,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 5
          }
        ]
      },
    ]
  },
  {
    "id": 1,
    "firstName": "test2 first name",
    "lastName": "test2 last name",
    "data": [
      {
        "date": "2018-04-02",
        "totalHours": 55,
          "tickets" : [
          {
            "id": 1,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 52
          },
          {
            "id": 2,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 2
          },
          {
            "id": 3,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 1
          }
        ]
      },
      {
        "date": "2018-04-03",
        "totalHours": 6.5,
        "tickets" : [
          {
            "id": 1,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 5
          },
          {
            "id": 2,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 1
          },
          {
            "id": 3,
            "ticketName": "test ticket name",
            "projectName": "test project name",
            "estimatedHours": 0.5
          }
        ]
      },
    ]
  }
]

export let rawJson = [
  {
    "resourceId": 1,
    "firstName": "some test fName",
    "lastName": "some test lName",
    "projectName": "some project Name",
    "ticketName": "some ticket name",
    "ticketId": 1,
    "ticketDonePercentage" : "90",
    "ticketStartDate" : "2018-04-01",
    "ticketDuetDate" : "2018-04-01",
    "estimatedHours" : 5
  },
  {
    "resourceId": 1,
    "firstName": "some test fName",
    "lastName": "some test lName",
    "projectName": "some project Name",
    "ticketName": "some ticket name",
    "ticketId": 1,
    "ticketDonePercentage" : "90",
    "ticketStartDate" : "2018-04-01",
    "ticketDuetDate" : "2018-04-01",
    "estimatedHours" : 5
  },
  {
    "resourceId": 2,
    "firstName": "some2 test fName",
    "lastName": "some2 test lName",
    "projectName": "some project Name",
    "ticketName": "some ticket name",
    "ticketId": 1,
    "ticketDonePercentage" : "90",
    "ticketStartDate" : "2018-04-02",
    "ticketDuetDate" : "2018-04-02",
    "estimatedHours" : 5
  }
]

export var processedJson = [];

export class ResourceUtilizationComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Resource: new Resource(),
      ResourceUtilization : thejson

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e){
    const target= e.target;
    const inputValue = target.value;
    const fieldName = target.name;
    let state=this.state;
    // state.RegisterStepOneFormModel[fieldObjectName].value = inputValue //{M.A}: bad approach
    //TODO: {M.A}: use a generic utils stateless function
    // that all other componenets can use to set state:
    this.updateFormFieldInState(state.RegisterStepOneFormModel[fieldName].name, inputValue);
  }

  handleSubmit(e) {

  }

  changeRouteState(e){

  }

  /*
   * formField: string value of form model field name
   * value: value to be assigned to that field.value
   */
  updateFormFieldInState(formField, value) {

  }

  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){
    fetch("http://openpencil.com:7000/checkResourceLoad/2018-04-02/2018-04-06")
      .then(data => data.json())
      .then(res => {
        rawJson = res;
        this.formatMe();
      })
  }

  // isResourceInProccessedJson(resourceId){
  //   processedJson.forEach((pRow) => {
  //     if(pRow.resourceId === resourceId){
  //       return true
  //     }else{
  //       return false
  //     }
  //   })
  // }
  //
  // updateFirstLevelByResourceId(resourceId){
  //   processedJson.forEach((row) => {
  //     if(row.resourceId === resourceId){
  //
  //     }
  //   })
  // }
  //
  // componentDidMount(){
  //
  //   rawJson.forEach((row) => {
  //     //if I already have this, add things to it. if not, make and add
  //     if(this.isResourceInProccessedJson(row.resourceId)){
  //       update
  //     }
  //     processedJson.push({[row.resourceId] :  row.resourceId});
  //     alert(JSON.stringify(processedJson));
  //   });
  //   console.log(processedJson);
  // }


  formatMe(){
    var formatted = new Map();
    var formateNeeded = []
    formateNeeded.forEach((row) => {
      var resourceId = row.id;
      formatted[resourceId] = row;
    });

    function createFormattedItem(resourceId, rawItem) {
      "use strict";

      var formattedItem = {
        "id": resourceId,
        "firstName": rawItem.firstName,
        "lastName": rawItem.lastName,
        "data": []
      };

      formatted[resourceId] = formattedItem;

      return formattedItem;
    }

    function createTicketDateEntry(formattedItem, ticketDate) {
      "use strict";

      var dateEntry = {
        "date": ticketDate,
        "totalHours": 0,
        "tickets": []
      }

      formattedItem.data.push(dateEntry);

      return dateEntry;
    }

    function createTicketEntry(dateEntry, ticketId, ticketName, projectName) {
      "use strict";

      var ticketEntry = {
        "id": ticketId,
        "ticketName": ticketName,
        "projectName": projectName,
        "estimatedHours": 0
      };

      dateEntry.tickets.push(ticketEntry);

      return ticketEntry;
    }



    rawJson.forEach((row) => {
      "use strict";

      var resourceId = row.resourceId;
      var formattedItem = formatted[resourceId];

      if (undefined === formattedItem)
        formattedItem = createFormattedItem(resourceId, row);

      var ticketDate = row.ticketStartDate;
      var dateEntry = formattedItem.data.find((item) => item.date === ticketDate);

      if (undefined === dateEntry)
        dateEntry = createTicketDateEntry(formattedItem, ticketDate);

      var ticketEntry = dateEntry.tickets.find((ticket) => ticket.id === row.ticketId);

      if (undefined === ticketEntry)
        ticketEntry = createTicketEntry(dateEntry, row.ticketId, row.ticketName, row.projectName);

      ticketEntry.estimatedHours += row.estimatedHours;
      dateEntry.totalHours = dateEntry.tickets.map((ticket) => ticket.estimatedHours).reduce((x) => x);
    });

    var values = [];

    for (var key in formatted)
      values.push(formatted[key]);
    this.state.ResourceUtilization  = values;
    this.forceUpdate();
    console.log(JSON.stringify(values))

  }
  componentDidMount(){


  }

  render(){
    let state=this.state;
    return(
      <div style={{minWidth :'300%'}}>
        {state.ResourceUtilization.map((resource, i) => {
          return(
            <div>
              <div className="ResourceWrapper" style={{
                display: 'table',
                position:'relative',
                border: 'thick black solid'
                  }}>
                <div style={{float: 'left',
                  minWidth:'100px',
                  maxWidth:'100px',
                  width: '100px'}}>{resource.firstName} {resource.lastName}</div>
                {resource.data.map((resourceData,i) => {
                  return(
                    <div id="dateWrapper"
                         style={{float: 'left',
                           margin: '10px',
                           minWidth:'100px',
                           maxWidth:'100px',
                           width: '100px',
                         }}>
                      {resourceData.date.slice(0,10)}
                      <br/>
                      {/*<h2>{resourceData.totalHours}</h2>*/}
                      {resourceData.tickets.map((ticket,i) => {
                        return(
                          <a style={{textDecoration: 'none'}} href={'http://openpencil.com/pm/issues/'+ticket.id}>
                            <div style={{border: 'thin blue dotted', marginTop: '10px'}}>
                              <div>
                                <h3>{ticket.estimatedHours} Hrs</h3>
                                {ticket.ticketDonePercentage}% - {ticket.ticketName}
                              </div>
                             <div style={{textOverflow:'ellipsis',whiteSpace: 'nowrap',
                               overflow: 'hidden'}} ><strong>{ticket.projectName}}</strong></div>
                            </div>
                          </a>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
              <br/>
              <hr/>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Resource: state.Resource
});

const mapDispatchToProps = (dispatch) => ({

});

export const resourceUtilizationContainer =
  connect   (mapStateToProps, mapDispatchToProps)(ResourceUtilizationComp);
