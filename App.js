import React from 'react';
import Header from './Header';
import TableRow from './TableRow';

export default class App extends React.Component{
    constructor() {
        super();

        this.state = {
            header: "Header from state...",
            content: "Content from state...",
            data:
                [
                    {
                        "id":1,
                        "name":"Foo",
                        "age":"20"
                    },

                    {
                        "id":2,
                        "name":"Bar",
                        "age":"30"
                    },

                    {
                        "id":3,
                        "name":"Baz",
                        "age":"40"
                    }
                ]
        }
    }

    render(){
        const rows = this.state.data.map((person, i)=>
            <TableRow key={person.id} data={person} />
        );
        
        return(
          <div>
              <Header/>
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
              <div>
                  <h1>{this.props.headerProp}</h1>
                  <h2>{this.props.contentProp}</h2>
              </div>
          </div>
        );
    }
}

App.defaultProps = {
    headerProp: "Header from props...",
    contentProp:"Content from props..."
}