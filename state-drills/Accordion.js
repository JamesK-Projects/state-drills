import React, { Component } from 'react';


class Accordion extends Component {
    
    static defaultProps = {
        sections: [
            {
                title: 'Section 1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Section 2',
                content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
            },
            {
                title: 'Section 3',
                content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
            },
        ]
    }

    state = { 
        currentSectionIndex: 0
    }

    handleClick(index){
        console.log('clicked', this.props.sections[index].content)
        {this.renderContent(index)}
    }

    renderButtons(){
        return this.props.sections.map((sections, index) => (
            <ul>
                <li>
                    <button key={index} onClick={() => this.handleClick(index)}>
                        {sections.title}
                    </button>
                    {this.renderContent(index)}
                </li>
            </ul>
        ))
    }

    renderContent(index){
        const currentSection = this.props.sections[index];
        return <div className = "content">
                {currentSection.content}
            </div>
    }

    render() { 
        return ( 
        <div>
            {this.renderButtons()}
        </div> 
        );
    }
}
 
export default Accordion;