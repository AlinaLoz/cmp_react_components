import React from 'react';

import('../test-import/add').then((math) => {
    console.log('add', math.add(1, 2));
});

class ClassComponent  extends React.PureComponent {

    render() {
        console.log('render ClassComponent');
        console.log('this.props', this.props.title);
        console.log('this.testList', this.props.testList);

        return (
            <div>
                <p>ClassComponent</p>   
                <p>{this.props.title}</p>
            </div>
        );
    }

}

export default ClassComponent;