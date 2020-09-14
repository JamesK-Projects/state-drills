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
        currentSectionIndex: 0,
        accordions: [false, false, false]
    }

    handleClick(index){
        console.log('clicked', this.props.sections[index].content)
        let accordionClone = [...this.state.accordions]
        accordionClone[index] = !accordionClone[index]
        this.setState({
            accordions: accordionClone
        })
    }

    renderButtons(){
        return this.props.sections.map((sections, index) => (
           
                <li key={index}>
                    <button onClick={() => this.handleClick(index)}>
                        {sections.title}
                    </button>
                    {
                        this.state.accordions[index] && this.renderContent(index)
                    }
                </li>
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
             <ul>
                {this.renderButtons()}
            </ul>
        </div> 
        );
    }
}
 
export default Accordion;